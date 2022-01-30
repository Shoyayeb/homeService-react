import axios from "axios";
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
        })
        .catch((error) => {
          setError(error.message);
        });
    } else if (socialProvider === "twitter") {
      signInWithPopup(auth, twitterProvider)
        .then((result: any) => {
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  //   create user with email and password
  const createUserByEmail = (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: any
  ) => {
    setIsLoading(true);
    const name = firstName + " " + lastName;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user created", auth.currentUser);
        setError("");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: null,
        });
        axios
          .get("http://localhost:5500/userupdate", {
            headers: {
              email: `${auth.currentUser.uid}`,
            },
          })
          .then((res) => {
            setError(res.data);
            console.log(res.data);
          })
          .catch((error) => {
            setError(error.message);
          });
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
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  //   sign out
  const signOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setError("");
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
    socialSignIn,
    createUserByEmail,
    signOutUser,
    loginUserByEmail,
  };
};
export default useFirebase;
