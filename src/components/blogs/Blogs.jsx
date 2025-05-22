import React, { useEffect, useState } from "react";
import "./Blogs.css";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useLocalContext } from "../../context/LocalContext";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const { setSelectedUserBlog} = useLocalContext();
  const navigate = useNavigate();

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
    };
    
    fetchBlogs();
  }, []);

  const handleBlogClick = (blog) => {
    setSelectedUserBlog(blog);
    const formattedTitle = blog.title.toLowerCase().replace(/\s+/g, '-');  // Replace spaces with hyphens
    navigate(`/blog/${formattedTitle}`);
  };

  return (
    <>
      <div className="categories-header">
        <div className="head">
          <div></div>
          <h2 className="categories-heading">Stay Ahead in Cybersecurity</h2>
        </div>
      </div>
      <div className="blogs-section blogs-section-user">
        <div className="blogs-grid">
          {blogPosts.map((blog) => (
            <div className="blog-card" key={blog.id} onClick={() => handleBlogClick(blog)}>
              <div className="blog-card-top">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-meta">
                  <span>{blog.formattedDate}</span> • <span>{blog.author}</span>
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
                      {blog.content.replace(/<[^>]+>/g, "").slice(0, 180)}...
                    </p>
                    <button className="blog-btn" onClick={() => handleBlogClick(blog)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="blogs-footer">
          <button className="explore-button" onClick={() => navigate('/blogs')}>
            Explore Our Blogs
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
