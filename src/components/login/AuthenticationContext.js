import React, { useContext, useState } from 'react'
 
const AuthContext = React.createContext()
 
export function useAuthentication() {
    return useContext(AuthContext)
}
 
export function AuthenticContext(props) {
    const [authUser, setAuthUser] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }
 
    return <AuthContext.Provider value={value}>
        {props.children}
    </AuthContext.Provider>
}