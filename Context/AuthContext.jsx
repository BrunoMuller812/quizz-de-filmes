import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
    const [currentUser, setCurrentUser] = useState(localStorage.getItem("currentUser") || null);

    const login = (username) => {
        setIsLoggedIn(true);
        setCurrentUser(username);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", username);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setCurrentUser(null);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
