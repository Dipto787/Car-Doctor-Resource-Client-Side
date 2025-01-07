import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export let AuthContext = createContext(null);
export let auth = getAuth(app);
const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    let createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    let signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    let logout=()=>{
            return signOut(auth);
    }
    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
        })
        return () => unSubscribe();
    }, [])
    let userInfo = { createUser, user, signIn,logout };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;