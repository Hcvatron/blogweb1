import { createContext, useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
  arrayRemove,
  arrayUnion
} from "firebase/firestore";
import { toast } from "react-toastify";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState( null );
  
   useEffect(() => {
    const verifyAdminFromStorage = async () => {
      const storedEmail = localStorage.getItem("admin");
      if (!storedEmail) return;

      try {
        const snapshot = await getDocs(collection(db, "admin"));
        const matchedAdmin = snapshot.docs.find(
          (doc) => doc.data().email === storedEmail && doc.data().role === "all"
        );

        if (matchedAdmin) {
          setAdmin(storedEmail);
        } else {
          localStorage.removeItem("admin");
        }
      } catch (error) {
        console.error("Failed to verify admin:", error);
        localStorage.removeItem("admin");
      }
    };

    verifyAdminFromStorage();
  }, []);
  
  // 🔐 Admin Login with Role Check
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
      setAdmin(email);
      localStorage.setItem("admin", email);
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Admin login error:", err.message);
      toast.error(err.message);
      throw err; // So the component can optionally catch it
    }
  };

  const AdminLogout = () => {
  setAdmin(null);
  localStorage.removeItem("admin");
  toast.success("Logged out successfully");
};



//fetch users
const fetchUsers = async () => {
  const snapshot = await getDocs(collection(db, "users"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// ❌ Delete a user
const deleteUser = async (userId) => {
  await deleteDoc(doc(db, "users", userId));
  toast.success("User deleted successfully");
};






// 📥 Fetch Contact Messages
const fetchMessages = async () => {
  const snapshot = await getDocs(collection(db, "contacts"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};



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
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);
