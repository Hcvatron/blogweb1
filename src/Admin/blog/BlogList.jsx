import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogList.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAdminContext } from '../../context/AdminContext';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const BlogList = ({ blogs = [], count = 'all', main = false }) => {
  const navigate = useNavigate();
  const { selectBlog } = useAdminContext();

  const formatDate = (date) => {
    if (!date) return '';
    const parsed = new Date(date.seconds ? date.seconds * 1000 : date);
    return parsed.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleBlogClick = (blog) => {
    selectBlog(blog);
    const formattedTitle = blog.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/blog/${formattedTitle}`);
  };

  const handleEdit = (blog) => {
    selectBlog(blog);
    navigate('/admin/blog/edit');
  };

  const handleDelete = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      await deleteDoc(doc(db, '_blogs', blogId));
      window.location.reload(); // Reload or you can lift state up and refetch
    }
  };

  const displayedBlogs = count === "all"
    ? blogs
    : blogs.slice(0, parseInt(count));

  if (!blogs.length) {
    return (
      <div className="no-blogs">
        <p>No blogs available. Add a new one!</p>
      </div>
    );
  }

  return (
    <div className="blogs-container">
      <div className="blog-container-head">
        <h2>Your Blogs ↓</h2>
      </div>

      <div className="blog-container-div">
        {displayedBlogs.map((blog) => {
          const shortContent = blog.content.replace(/<[^>]+>/g, '').slice(0, 200);
          const isLong = blog.content.length > 200;

          return (
            <div key={blog.id} className="blog-card">
              <div className="blog-image" onClick={() => handleBlogClick(blog)}>
                {(blog.imageBase64 || blog.imageLink) && (
                  <img src={blog.imageBase64 || blog.imageLink} alt="Blog" />
                )}
              </div>
              <div className="blog-content">
                <h3 onClick={() => handleBlogClick(blog)}>{blog.title}</h3>
                <p style={{ whiteSpace: 'pre-wrap' }}>
                  {shortContent}
                  {isLong && "... "}
                  {isLong && (
                    <button
                      className="read-more-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBlogClick(blog);
                      }}
                    >
                      <span>Read More</span>
                    </button>
                  )}
                </p>
                <p><strong>Category:</strong> {blog.category}</p>
                <p><strong>Date:</strong> {formatDate(blog.formattedDate)}</p>
                <p><strong>Created At:</strong> {formatDate(blog.createdAt)}</p>

                {main && (
                  <div className="blog-actions">
                    <button className="edit-btn" onClick={() => handleEdit(blog)}>
                      <FontAwesomeIcon icon={faPencil} /> Edit
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(blog.id)}>
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
