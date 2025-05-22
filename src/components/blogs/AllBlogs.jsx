import React, { useEffect, useState } from "react";
import "./AllBlogs.css";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useLocalContext } from "../../context/LocalContext";
import { ClipLoader } from "react-spinners";

const AllBlogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const { setSelectedUserBlog } = useLocalContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     const fetchBlogs = async () => {
       const querySnapshot = await getDocs(collection(db, "_blogs"));
       const blogData = querySnapshot.docs.map((doc) => {
         const data = doc.data();
         return {
           id: doc.id, 
           ...data,
           formattedDate: data.date
             ? new Date(data.date).toLocaleDateString("en-US", {
                 year: "numeric",
                 month: "long",
                 day: "numeric",
               })
             : "Date not available", // If the date field is missing
         };
       });
       setBlogPosts(blogData);
       setLoading(false);
     };

    fetchBlogs();
  }, []);

  const handleBlogClick = (blog) => {
    setSelectedUserBlog(blog);
    const formattedTitle = blog.title.toLowerCase().replace(/\s+/g, '-');  // Replace spaces with hyphens
  navigate(`/blogs/${formattedTitle}`);
  };

  if (loading) {
    return (
      <div className="loader-wrapper">
        <ClipLoader color="#b78a4d" size={80} />
      </div>
    );
  }

  return (
    <div className="blogs-grid">
  {blogPosts.length === 0 ? (
    <div className="no-blogs-message">
      <h2>No Blogs Available</h2>
      <p>Please check back later. We're constantly adding new content!</p>
    </div>
  ) : (
    blogPosts.map((blog) => (
      <div className="blog-card" key={blog.id} onClick={() => handleBlogClick(blog)}>
        <div className="blog-card-top">
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-meta">
            <span>{blog.formattedDate}</span> • By <span>{blog.author}</span>
          </p>
        </div>
        <div className="blog-card-bot">
          <div className="blog-content">
            {(blog.imageBase64 || blog.imageLink) && (
              <img
                src={blog.imageBase64 || blog.imageLink}
                alt="Blog"
                className="blog-image"
              />
            )}
            <div className="blog-content-right">
              <p className="blog-description">
                {blog.content.replace(/<[^>]+>/g, "").slice(0, 700)}...
              </p>
              <button className="read-more-btn" onClick={() => handleBlogClick(blog)}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    ))
  )}
</div>
  );
};

export default AllBlogs;
