import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";
import "./Blogpage.css";
import CommentForm from "./CommentForm/CommentForm";
import { ClipLoader } from "react-spinners";

const BlogPage = () => {
  const navigate = useNavigate();
  const slug = window.location.pathname.split("/blogs/")[1];
  const { selectedBlog, fetchBlogBySlug, loading } = useBlogContext();

  useEffect(() => {
    if (slug) fetchBlogBySlug(slug);
  }, [slug]);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <ClipLoader color="#b78a4d" size={80} />
      </div>
    );
  }
  
  if (!selectedBlog) {
    return (
      <div className="blogpage-container">
        <h2>Blog Not Found</h2>
        <button className="back-button" onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="blogpage-container">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Blogs
        </button>
         <div className="blog-content">
        {(selectedBlog.imageBase64 || selectedBlog.imageLink) && (
          <img
            src={selectedBlog.imageBase64 || selectedBlog.imageLink}
            alt="Blog"
            className="blog-image"
          />
        )}
          </div>

        <h1 className="blog-title">{selectedBlog.title}</h1>
        <p className="blog-meta">
          <span>{selectedBlog.formattedDate}</span> • <span>{selectedBlog.author}</span>
        </p>
        <div className="blog-content-container">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
          />
        </div>
      </div>
      <CommentForm />
    </>
  );
};

export default BlogPage;
