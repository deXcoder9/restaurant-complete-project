import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import auth from "../../firebase.config"

import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()
    
    const googleProvider = new GoogleAuthProvider()

    useEffect(()  =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                setUserInfo(currentUser)
                console.log("current user:" , currentUser )
                const currenUserInfo = {email: currentUser.email}
                axiosPublic.post("/jwt", currenUserInfo)
                .then(res =>{
                    if(res.data?.token){
                        localStorage.setItem("access-token", res.data.token )
                    }
                })
            }else{
                setUserInfo(null)
                localStorage.removeItem("access-token")
            }
            setLoading(false)
        } );
        return () => {
            return unsubscribe();
        }
    },[axiosPublic])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const googleSingIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    const logOut =  () =>{
        setLoading(true);
        return signOut(auth)
    }



    const authInfo= {
        userInfo,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSingIn
    }
  return (
    <AuthContext.Provider value={authInfo} >
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider