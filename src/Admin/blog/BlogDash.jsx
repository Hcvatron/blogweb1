import React, { useEffect, useState } from 'react';
import './BlogDash.css';
import BlogList from './BlogList';
import AddBlogForm from './AddBlogForm';
import AddCategoryModal from './AddCategoryModal';
import { useAdminContext } from '../../context/AdminContext';

const BlogDash = () => {
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeCategoryDetails, setActiveCategoryDetails] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const { fetchCategories, fetchCategoryById, fetchBlogs, fetchBlogsFromCategory } = useAdminContext();

  // Fetch all categories on load
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        console.error('Failed to load categories', err);
      }
    };
    loadCategories();
  }, [activeCategory,fetchCategories]);

  // Fetch metadata for the selected category
useEffect(() => {
  if (activeCategory === 'all') {
    setActiveCategoryDetails(null);
    return;
  }

  let cancelled = false;

  const loadCategoryDetails = async () => {
    try {
      const details = await fetchCategoryById(activeCategory);
      if (!cancelled) {
        setActiveCategoryDetails(details);
      }
    } catch (err) {
      console.error('Failed to fetch category details:', err);
      setActiveCategoryDetails(null);
    }
  };

  loadCategoryDetails();

  return () => {
    cancelled = true;
  };
}, [activeCategory, fetchCategoryById]);

useEffect(() => {
  const loadBlogs = async () => {
    try {
      const data = activeCategory === 'all'
        ? await fetchBlogs()
        : await fetchBlogsFromCategory(activeCategory);

      setBlogs(data);
    } catch (err) {
      console.error('Failed to load blogs:', err);
    }
  };

  loadBlogs();
}, [activeCategory, fetchBlogs, fetchBlogsFromCategory]);



  const handleAddBlog = () => setShowAddBlog(true);
  const handleAddCategory = () => setShowCategoryModal(true);

  return (
    <div className="blog-dash">
      {/* Header Actions */}
      <div className="blog-dash-actions">
        <button className="add-blog-btn" onClick={handleAddBlog}>Add Blog</button>
        <button className="add-blog-btn add-category-btn" onClick={handleAddCategory}>Add Category</button>
      </div>

      {/* Category Filter Nav */}
      <div className="blog-category-nav">
        <button
          className={activeCategory === 'all' ? 'active' : ''}
          onClick={() => setActiveCategory('all')}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={activeCategory === cat.id ? 'active' : ''}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Active Category Metadata */}
      {activeCategoryDetails && (
        <div className="category-meta">
          <p><strong>Category:</strong> {activeCategoryDetails.name}</p>
          <p><strong>Created:</strong> {new Date(activeCategoryDetails.createdAt.toDate()).toLocaleDateString()}</p>
        </div>
      )}

      {/* Blog List */}
      <div className="blog-list">
        <BlogList blogs={blogs} count="all" category={activeCategory} />
      </div>

      {/* Modals */}
      {showCategoryModal && <AddCategoryModal onClose={() => setShowCategoryModal(false)} />}
      {showAddBlog && <AddBlogForm onClose={() => setShowAddBlog(false)} />}
    </div>
  );
};

export default BlogDash;
