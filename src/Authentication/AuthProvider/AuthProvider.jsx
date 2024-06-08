/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //   google sign in function
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   user creation with email and password function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login with email and password function
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout function
  const logout = () => {
    setLoading(true);
    return signOut(auth).then(() => {});
  };

  //   user state change function
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(`User state has been changed ${currentUser?.email}`);
      setUser(currentUser);
      return () => {
        unsubscribe();
      };
    });
  }, []);

  // user information
  const userInfo = {
    user,
    loading,
    createUser,
    login,
    logout,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
