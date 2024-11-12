import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "/src/css/loginPageCSS/loginPage.module.css";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "admin" && password === "admin") {
            navigate("/home"); // Redirect to Home on successful login
        } else {
            setError("Invalid username or password.");
        }
    };

    return (
        <div className={styles.loginPage_container}>
            <form className={styles.loginForm} onSubmit={handleLogin}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    className={styles.inputField}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className={styles.inputField}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit" className={styles.submitButton}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
