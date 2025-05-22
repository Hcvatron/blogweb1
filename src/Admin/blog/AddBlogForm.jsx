import React, { useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';

import './AddBlogForm.css';
import './TiptapEditor.css';

const AddBlogForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  const [link, setLink] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [seoKeywords, setSeoKeywords] = useState('');

  const navigate = useNavigate();
  const categories = ['Antivirus', 'Printer', 'Windows OS'];

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: '',
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  const formatTitleForURL = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageBase64 && !imageLink) {
      toast.error('Please upload an image or provide an image URL');
      return;
    }

    if (!category) {
      toast.error('Please select a category');
      return;
    }

    const formattedTitle = formatTitleForURL(title);

    try {
      const blogRef = collection(db, '_blogs');
      await addDoc(blogRef, {
        title,
        content,
        imageBase64,
        imageLink,
        category,
        createdAt: new Date(),
        formattedDate: date,
        author,
        urlSlug: formattedTitle,
        seoTitle,
        seoDescription,
        seoKeywords: seoKeywords.split(',').map(k => k.trim()).join(', '),
      });

      toast.success('Blog added successfully!');

      setTitle('');
      setContent('');
      setImage(null);
      setImageBase64('');
      setCategory('');
      setDate('');
      setAuthor('');
      setLink('');
      setImageLink('');
      setSeoTitle('');
      setSeoDescription('');
      setSeoKeywords('');
      editor?.commands.setContent('');
    } catch (err) {
      toast.error('Error uploading blog: ' + err.message);
    }
  };

  return (
    <div className="addblog">
      <div className="close" onClick={onClose}>X</div>
      <div className="addblog-form">
        <h2>Add a Blog</h2>
        <form onSubmit={handleSubmit} className="blog-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            {editor && (
              <div className="tiptap-toolbar">
                <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'active' : ''}>Bold</button>
                <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'active' : ''}>Italic</button>
                <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} className={editor.isActive('underline') ? 'active' : ''}>Underline</button>
                <button type="button" onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? 'active' : ''}>P</button>
                <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'active' : ''}>H1</button>
                <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'active' : ''}>H2</button>
                <button type="button" onClick={() => editor.chain().focus().setTextAlign('left').run()}>Left</button>
                <button type="button" onClick={() => editor.chain().focus().setTextAlign('center').run()}>Center</button>
                <button type="button" onClick={() => editor.chain().focus().setTextAlign('right').run()}>Right</button>
                <input type="color" onInput={(e) => editor.chain().focus().setColor(e.target.value).run()} title="Text Color" />
              </div>
            )}
            <EditorContent editor={editor} className="tiptap" />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="image">Blog Image</label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>

          <div className="form-group">
            <label htmlFor="imageLink">Image URL (optional)</label>
            <input
              type="url"
              id="imageLink"
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)}
              placeholder="Enter an image URL"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author Name</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              required
            />
          </div>

          <h3>For SEO ↓</h3>
          <div className="form-group">
            <label htmlFor="seoTitle">SEO Title</label>
            <input
              type="text"
              id="seoTitle"
              value={seoTitle}
              onChange={(e) => setSeoTitle(e.target.value)}
              placeholder="Enter SEO Title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="seoDescription">SEO Description</label>
            <input
              type="text"
              id="seoDescription"
              value={seoDescription}
              onChange={(e) => setSeoDescription(e.target.value)}
              placeholder="Enter SEO Description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="seoKeywords">SEO Keywords (comma separated)</label>
            <input
              type="text"
              id="seoKeywords"
              value={seoKeywords}
              onChange={(e) => setSeoKeywords(e.target.value)}
              placeholder="Enter SEO Keywords"
            />
          </div>

          {imageBase64 && <img src={imageBase64} alt="Blog preview" className="image-preview" />}
          <button type="submit" className="submit-btn">Add Blog</button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogForm;
