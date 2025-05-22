import React, { useState } from 'react';
import { toast } from 'react-toastify'; // For success/error notifications
import { db } from '../../firebase/firebaseConfig'; // Firebase config
import { doc, setDoc } from 'firebase/firestore'; // Firebase Firestore functions

const MetaDataForm = ({ pageId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !description || !keywords) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      // Save metadata to Firestore under a specific pageId
      const metadataRef = doc(db, 'pageMetadata', pageId); // Modify according to your Firestore structure

      await setDoc(metadataRef, {
        title,
        description,
        keywords,
        timestamp: new Date(),
      });

      toast.success('Meta data updated successfully!');
    } catch (error) {
      toast.error('Error updating metadata.');
      console.error(error);
    }
  };

  return (
    <div className="meta-data-form-container">
      <h2>Edit Meta Data for Page: {pageId}</h2>
      <form onSubmit={handleSubmit} className="meta-data-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the page title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the page description"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="keywords">Keywords</label>
          <input
            type="text"
            id="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Enter keywords, separated by commas"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default MetaDataForm;
