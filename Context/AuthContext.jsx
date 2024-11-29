import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
    const [currentUser, setCurrentUser] = useState(localStorage.getItem("currentUser") || null);
    const [avatar, setAvatar] = useState(localStorage.getItem(`${currentUser}_avatar`) || "/src/assets/default-avatar.png");
    const [displayName, setDisplayName] = useState(localStorage.getItem(`${currentUser}_displayName`) || currentUser);

    const login = (username) => {
        setIsLoggedIn(true);
        setCurrentUser(username);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", username);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setCurrentUser(null);
        setAvatar("/src/assets/default-avatar.png");
        setDisplayName(null);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
    };

    const updateProfile = (newAvatar, newDisplayName) => {
        setAvatar(newAvatar);
        setDisplayName(newDisplayName);
        localStorage.setItem(`${currentUser}_avatar`, newAvatar);
        localStorage.setItem(`${currentUser}_displayName`, newDisplayName);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, currentUser, avatar, displayName, login, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
