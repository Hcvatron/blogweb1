import { createContext, useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  addDoc
} from "firebase/firestore";
import { toast } from "react-toastify";
import { data } from "react-router-dom";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(localStorage.getItem("admin_uid"));

useEffect(() => {
  const verifyAdminFromStorage = async () => {
    const storedUID = localStorage.getItem("admin_uid");
    if (!storedUID) return;

    try {
      const adminRef = doc(db, "admin", storedUID);
      const adminDoc = await getDoc(adminRef);

      if (adminDoc.exists() && adminDoc.data().role === "all") {
        setAdmin(adminDoc.data().email); // ✅ set email
      } else {
        localStorage.removeItem("admin_uid");
        setAdmin(null);
      }
    } catch (error) {
      console.error("Failed to verify admin:", error);
      localStorage.removeItem("admin_uid");
      setAdmin(null);
    }
  };

  verifyAdminFromStorage();
}, []);


  // ------------------------------ 🔐 Admin auth management ------------------------
 const AdminLogin = async (email, password, navigate) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    const adminRef = doc(db, "admin", uid);
    const adminDoc = await getDoc(adminRef);

    if (!adminDoc.exists() || adminDoc.data().role !== "all") {
      throw new Error("Access denied");
    }

    toast.success("Login successful");

    // ✅ Save UID in localStorage
    localStorage.setItem("admin_uid", uid);
    setAdmin(email); // you can still use email for display

    navigate("/admin/dashboard");
  } catch (err) {
    console.error("Admin login error:", err.message);
    toast.error(err.message);
    throw err;
  }
};

  const AdminLogout = () => {
    setAdmin(null);
  localStorage.removeItem("admin_uid");
  toast.success("Logged out successfully");
  };

// ------------------------------ 🔐end Admin auth management ------------------------



  //--------------------------------- 👤 User Management ----------------------
  const fetchUsers = async () => {
    const snapshot = await getDocs(collection(db, "users"));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const deleteUser = async (userId) => {
    await deleteDoc(doc(db, "users", userId));
    toast.success("User deleted successfully");
  };
 //--------------------------------- 👤end User Management ----------------------


  //---------------------------- ✉️ Contact Messages ----------------------
  const fetchMessages = async () => {
    const snapshot = await getDocs(collection(db, "contacts"));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };
//---------------------------- ✉️End  Contact Messages ----------------------


  //-------------------------- 📁 Category Management ---------------------------
  const addCategory = async (name) => {
    const formattedName = name.toLowerCase().replace(/\s+/g, '-');
    const ref = doc(db, 'categories', formattedName);
    await setDoc(ref, {
      name,
      createdAt: new Date(),
    });
    return formattedName;
  };

  const fetchCategories = async () => {
    const snapshot = await getDocs(collection(db, 'categories'));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };

  const fetchCategoryById = async (docId) => {
  try {
    const ref = doc(db, 'categories', docId);
    const snapshot = await getDoc(ref);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    } else {
      throw new Error('Category not found');
    }
  } catch (err) {
    console.error('Error fetching category:', err.message);
    throw err;
  }
};


  const deleteCategory = async (categoryId) => {
    await deleteDoc(doc(db, 'categories', categoryId));
    toast.success("Category deleted");
  };

  const updateCategory = async (oldId, newName) => {
    const newId = newName.toLowerCase().replace(/\s+/g, '-');
    const newRef = doc(db, 'categories', newId);
    const oldRef = doc(db, 'categories', oldId);
    const docSnap = await getDoc(oldRef);

    if (docSnap.exists()) {
      await setDoc(newRef, {
        ...docSnap.data(),
        name: newName,
        updatedAt: new Date(),
      });
      await deleteDoc(oldRef);
      toast.success("Category updated");
    } else {
      throw new Error("Old category not found");
    }
  };
// --------------------------📁 End Category Management----------------

// -------------------------- 📚 Blog Management ---------------------------
const fetchBlogs = async () => {
  const snapshot = await getDocs(collection(db, '_blogs'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const fetchBlogsFromCategory = async (categoryId) => {
  const snapshot = await getDocs(collection(db, `categories/${categoryId}/blogs`));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};



const addBlog = async (categoryId, blogData) => {
  try {
    // Add to global collection
    const blogRef = await addDoc(collection(db, '_blogs'), blogData);

    // Add to category-specific collection with the same ID
    const categoryBlogRef = doc(db, `categories/${categoryId}/blogs`, blogRef.id);
    await setDoc(categoryBlogRef, blogData);

    toast.success("Blog added successfully!");
    return blogRef.id;
  } catch (error) {
    console.error("Error adding blog:", error.message);
    throw error;
  }
};


const deleteBlog = async (blogId, categoryId) => {
  try {
    await deleteDoc(doc(db, '_blogs', blogId));
    await deleteDoc(doc(db, `categories/${categoryId}/blogs`, blogId));
    toast.success("Blog deleted from both locations");
  } catch (error) {
    console.error("Delete error:", error.message);
    throw error;
  }
};


const updateBlog = async (blogId, updatedData, categoryId) => {
  try {
    const globalRef = doc(db, '_blogs', blogId);
    const categoryRef = doc(db, `categories/${categoryId}/blogs`, blogId);

    await updateDoc(globalRef, {
      ...updatedData,
      updatedAt: new Date()
    });

    await updateDoc(categoryRef, {
      ...updatedData,
      updatedAt: new Date()
    });

    toast.success("Blog updated in both locations");
  } catch (error) {
    console.error("Update error:", error.message);
    throw error;
  }
};

// -------------------------- End 📚 Blog Management ---------------------------

  return (
  <AdminContext.Provider
  value={{
    admin,
    setAdmin,
    AdminLogin,
    AdminLogout,
    fetchUsers,
    deleteUser,
    fetchMessages,
    addCategory,
    fetchCategories,
    deleteCategory,
    updateCategory,
    fetchCategoryById,
    fetchBlogs,
    deleteBlog,
    fetchBlogsFromCategory,
    updateBlog,
    addBlog,
    fetchBlogs, 
  }}
>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);
