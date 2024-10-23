import React, { useState, useContext } from 'react'
 
const AuthContext = React.createContext();
 
export function useAuth() {
    return useContext(AuthContext)
}
 
export function AuthProvider(props) {
    const [authUser, setAuthUser] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
 
    const setUserInfo = (userInfo) => {
        setAuthUser(userInfo);
        console.log(authUser + "auth context value")
    }
 
    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
        setUserInfo
    }
 
    return <AuthContext.Provider value={value}>
        {props.children}
    </AuthContext.Provider>
}