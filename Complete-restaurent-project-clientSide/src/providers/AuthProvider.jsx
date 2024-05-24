import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import auth from "../../firebase.config"

import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()  =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                setUserInfo(currentUser)
                console.log("current user:" , currentUser )
            }else{
                setUserInfo(null)
            }
            setLoading(false)
        } );
        return () => {
            return unsubscribe();
        }
    },[])

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
        updateUserProfile
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