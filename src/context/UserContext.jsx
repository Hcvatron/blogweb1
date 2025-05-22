import { updateDoc, doc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"; // Firebase config
import { toast } from "react-toastify";
import { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(() => {
    // Retrieve user from localStorage only if it's valid
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  });

  // Sync the state to localStorage when the isUserLoggedIn changes
  useEffect(() => {
    if (isUserLoggedIn) {
      localStorage.setItem("user", JSON.stringify(isUserLoggedIn)); // Save user to localStorage
    } else {
      localStorage.removeItem("user"); // Remove user from localStorage when logged out
    }
  }, [isUserLoggedIn]);

  // Fetch user data from Firestore based on UID
  const fetchUser = async (uid) => {
    if (!uid) return;

    const userDocRef = doc(db, "_user", uid);
    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        let userData = { uid, ...docSnap.data() };

        // Only update if user data is different
        if (JSON.stringify(userData) !== JSON.stringify(isUserLoggedIn)) {
          setIsUserLoggedIn(userData);
        }

        // Convert Firestore Timestamps to JavaScript Date Strings
        if (userData.orders) {
          userData.orders = userData.orders.map((order) => ({
            ...order,
            timestamp: order.timestamp?.seconds
              ? new Date(order.timestamp.seconds * 1000).toISOString()
              : order.timestamp,
          }));
        }
      } else {
        setIsUserLoggedIn(null); // Clear user data if not found
      }
    });

    return unsubscribe; // Return unsubscribe function for cleanup
  };

  // Update user activity status (Active/Inactive)
  const updateActivity = async (status, uid) => {
    try {
      const userDocRef = doc(db, "_user", uid);
      const timestamp = new Date();
      if (status === "Active") {
        await updateDoc(userDocRef, {
          status: status,
          lastLogin: timestamp,
          timestamp,
        });
      } else if (status === "InActive") {
        await updateDoc(userDocRef, {
          status: status,
          lastLogout: timestamp,
          timestamp,
        });
      } else {
        toast.warning("Internal Error");
      }
    } catch (error) {
      console.error("Error while updating activity-->", error);
      toast.error("Error while updating activity");
    }
  };

  // Handle user logout (mark as inactive, reset state, and clear localStorage)
  const userLogout = () => {
    if (isUserLoggedIn?.uid) {
      updateActivity("InActive", isUserLoggedIn.uid); // Mark user as inactive
    }
    setIsUserLoggedIn(null); // Clear state
    localStorage.removeItem("user"); // Remove user from localStorage
  };

  // Fetch user data once the UID is available
  useEffect(() => {
    let unsubscribe;

    const handleFetch = async () => {
      if (isUserLoggedIn?.uid) {
        unsubscribe = await fetchUser(isUserLoggedIn.uid);
      }
    };

    handleFetch();

    return () => {
      if (unsubscribe) {
        unsubscribe(); // Cleanup the subscription when user data changes
      }
    };
  }, [isUserLoggedIn?.uid]);

  return (
    <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn, fetchUser, userLogout, updateActivity }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
