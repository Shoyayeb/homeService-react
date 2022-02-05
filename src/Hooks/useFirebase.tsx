import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState<[] | {} | null>([]);
  const [error, setError] = useState<string>("");
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const auth: any = getAuth();
  auth.useDeviceLanguage();

  const googleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  // google sign in
  const socialSignIn = (socialProvider: string) => {
    if (socialProvider === "google") {
      signInWithPopup(auth, googleProvider)
        .then((result: any) => {
          setError("");
          setShowLoginModal(false);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else if (socialProvider === "twitter") {
      signInWithPopup(auth, twitterProvider)
        .then((result: any) => {
          setError("");
          setShowLoginModal(false);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  //   create user with email and password
  const createUserByEmail = (email: string, password: string, name: string) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user created", auth.currentUser);
        setError("");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: null,
        });
        setShowLoginModal(false);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // login user with email and password
  const loginUserByEmail = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        setShowLoginModal(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // managing user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("====================================");
        console.log(user);
        console.log("====================================");
      } else {
        setUser({});
        console.log(user);
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  //   sign out
  const signOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setError("");
        console.log("====================================");
        console.log("Sign out success");
        console.log("====================================");
        //   sign out successfully
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    error,
    setError,
    isLoading,
    isLogin,
    setIsLogin,
    showLoginModal,
    setShowLoginModal,
    socialSignIn,
    createUserByEmail,
    signOutUser,
    loginUserByEmail,
  };
};
export default useFirebase;
