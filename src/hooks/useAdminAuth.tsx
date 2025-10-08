import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "@/firebase/config";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const useAdminAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminStatus = async (currentUser: User) => {
      try {
        // 1. Check admin role using Firestore (document ID is the User UID)
        const roleDocRef = doc(db, "user_roles", currentUser.uid);
        const roleDoc = await getDoc(roleDocRef);

        const userIsAdmin =
          roleDoc.exists() && roleDoc.data()?.role === "admin";

        if (userIsAdmin) {
          setIsAdmin(true);
        } else {
          // Log out unauthorized users
          await signOut(auth);
          setIsAdmin(false);
          navigate("/admin/login");
        }
      } catch (error) {
        console.error("Admin role check failed:", error);
        setIsAdmin(false);
        navigate("/admin/login");
      } finally {
        setLoading(false);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Defer admin status check to ensure component is mounted and auth is ready
        checkAdminStatus(currentUser);
      } else {
        setUser(null);
        setIsAdmin(false);
        setLoading(false);
        navigate("/admin/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return { user, isAdmin, loading };
};
