import axios, { Method } from "axios";
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
  const [user, setUser] = useState<any>([]);
  const [error, setError] = useState<string>("");
  const [modal, setModal] = useState<Boolean>(false);
  const [admin, setAdmin] = useState({});
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const auth: any = getAuth();
  auth.useDeviceLanguage();

  const googleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  // google sign in
  const socialSignIn = (socialProvider: string) => {
    setIsLoading(true);
    // if (socialProvider === "google") {
    //   return signInWithPopup(auth, googleProvider)
    //     .then((result: any) => {
    //       const user = result.user;
    //       setError("");
    //       setShowLoginModal(false);
    //       saveUser(user.email, user.displayName, "put");
    //     })
    //     .catch((error) => {
    //       setError(error.message);
    //       setModal(true);
    //     })
    //     .finally(() => {
    //       setIsLoading(false);
    //     });
    // } else if (socialProvider === "twitter") {
    //   return signInWithPopup(auth, twitterProvider)
    //     .then((result: any) => {
    //       setError("");
    //       setShowLoginModal(false);
    //       // saveUser(result.email, result.displayName, "put");
    //     })
    //     .catch((error) => {
    //       setError(error.message);
    //     })
    //     .finally(() => {
    //       setIsLoading(false);
    //     });
    // }
    const provider =
      socialProvider === "google" ? googleProvider : twitterProvider;

    try {
      return signInWithPopup(auth, provider).then((result: any) => {
        const user = result.user;
        setError("");
        setShowLoginModal(false);
        saveUser(user.email, user.displayName, "put");
      });
    } catch (error: any) {
      setError(error.message);
      setModal(true);
    } finally {
      setIsLoading(false);
    }
    // signInWithPopup(auth, provider)
    //   .then((result: any) => {
    //     const user = result.user;
    //     setError("");
    //     setShowLoginModal(false);
    //     saveUser(user.email, user.displayName, "put");
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //     setModal(true);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  //   create user with email and password
  const createUserByEmail = (email: string, password: string, name: string) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        setError("");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: null,
        });
        saveUser(email, name, "post");
        setShowLoginModal(false);
      })
      .catch((error) => {
        setError(error.message);
        setModal(true);
      })
      .finally(() => setIsLoading(false));
  };

  // login user with email and password
  const loginUserByEmail = (email: string, password: string) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        setModal(true);
      })
      .finally(() => setIsLoading(false));
  };

  // managing user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  // checking is admin
  useEffect(() => {
    const url = `https://homeservice-ixli.onrender.com/allusers/${user.email}`;
    axios.get(url).then((data: any) => {
      setAdmin(data.data);
    });
  }, [user]);

  //   sign out
  const signOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        setModal(true);
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email: string, displayName: string, method: Method) => {
    const url = "https://homeservice-ixli.onrender.com/adduser";
    const data = { email, displayName };
    axios({ method, url, data });
  };
  return {
    user,
    error,
    setError,
    isLoading,
    isLogin,
    setIsLogin,
    showLoginModal,
    admin,
    setAdmin,
    setShowLoginModal,
    socialSignIn,
    createUserByEmail,
    signOutUser,
    loginUserByEmail,
    modal,
    setModal,
  };
};
export default useFirebase;
