// context/BlogContext.js
import { createContext, useContext, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBlogBySlug = async (slug) => {
    setLoading(true);
    try {
      const q = query(collection(db, "_blogs"), where("urlSlug", "==", slug));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const doc = snapshot.docs[0];
        const data = doc.data();
        const blog = {
          id: doc.id,
          title: data.title,
          content: data.content,
          author: data.author,
          imageBase64: data.imageBase64,
          imageLink: data.imageLink,
          formattedDate: data.date
            ? new Date(data.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Date not available",
          seoTitle: data.seoTitle,
          seoDescription: data.seoDescription,
          seoKeywords: data.seoKeywords,
        };

        setSelectedBlog(blog);
        updateMetaTags(blog); // SEO Setup
      } else {
        setSelectedBlog(null);
      }
    } catch (err) {
      console.error("Error fetching blog by slug:", err);
      setSelectedBlog(null);
    } finally {
      setLoading(false);
    }
  };

  const updateMetaTags = (blog) => {
    document.title = blog.seoTitle || blog.title;

    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.name = "description";
      document.head.appendChild(desc);
    }
    desc.content = blog.seoDescription || "Default blog description";

    let keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords) {
      keywords = document.createElement("meta");
      keywords.name = "keywords";
      document.head.appendChild(keywords);
    }
    keywords.content = blog.seoKeywords || "blog, antivirus, cybersecurity";
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        selectedBlog,
        loading,
        fetchBlogBySlug,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext);
