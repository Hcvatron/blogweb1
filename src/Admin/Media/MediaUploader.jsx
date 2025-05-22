import  { useState, useEffect } from "react";
import { db, storage } from "../../firebase/firebaseConfig";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import "./MediaUploader.css";

const MediaUploader = ({ onSelectImage }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);

  // Handle Upload (either file or URL)
  const handleUpload = async () => {
    if ((!image && !imageUrl) || !category) {
      alert("Please select an image, paste a URL, and enter a category.");
      return;
    }

    let url = imageUrl; // Use direct URL if provided

    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);
      url = await getDownloadURL(storageRef);
    }

    const docRef = await addDoc(collection(db, "media"), { url, category });

    setImage(null);
    setImageUrl("");
    setCategory("");
    fetchImages();
  };

  // Fetch Images from Firestore
  const fetchImages = async () => {
    const querySnapshot = await getDocs(collection(db, "media"));
    const images = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUploadedImages(images);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Handle Delete
  const handleDelete = async (id, url) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      await deleteDoc(doc(db, "media", id));

      // Delete from Firebase Storage if it's an uploaded file
      if (url.startsWith("https://firebasestorage.googleapis.com")) {
        const storageRef = ref(storage, url);
        await deleteObject(storageRef).catch((error) => console.error("Storage delete error:", error));
      }

      fetchImages(); // Refresh images after deletion
    }
  };

  return (
    <div className="media-uploader">
      <h2>Upload or Paste Image URL</h2>

      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <input
        type="text"
        placeholder="Or paste an image URL here"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>

      <h3>Uploaded Images</h3>
      <div className="image-gallery">
        {uploadedImages.map((img) => (
          <div key={img.id} className="image-item">
            <img
              src={img.url}
              alt="Uploaded"
              onClick={() => onSelectImage(img.url)}
            />
            <p>{img.category}</p>
            <button className="delete-btn" onClick={() => handleDelete(img.id, img.url)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaUploader;
