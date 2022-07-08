import { createContext, useContext, useEffect, useState } from "react";
import {auth} from '../firebase-config';

const AuthContext = createContext()

export function AuthContextProvider({ children }) {
    
    const [currentUser, setCurrentUser] = useState()
    
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])
    
    const value = {
        currentUser,
        signup
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}