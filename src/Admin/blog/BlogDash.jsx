import React, { useState } from 'react';
import './BlogDash.css';
import BlogList from './BlogList';
import AddBlogForm from './AddBlogForm';

const BlogDash = () => {

  const [showAddBlog, setShowAddBlog] = useState(false);
 
  const handleAddBlog = () => {
     setShowAddBlog(true);
  };

  return (
    <div className="blog-dash">
      {/* Add Blog Button */}
      <button className="add-blog-btn" onClick={handleAddBlog}>Add Blog</button>

      {/* Blog List */}
      <div className="blog-list">
        <BlogList count="all" main="main" />
      </div>
      
      {showAddBlog && <AddBlogForm onClose={()=>setShowAddBlog(false)} />}
    </div>
  );
};

export default BlogDash;
