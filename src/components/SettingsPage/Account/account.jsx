import { useState } from "react";
import { useAuth } from "../../../../Context/AuthContext";
import styles from "/src/css/SettingsCSS/accountPage.module.css";

export default function AccountPage() {
    const { currentUser } = useAuth();
    const [displayName, setDisplayName] = useState(
        localStorage.getItem(`${currentUser}_displayName`) || currentUser
    );
    const [avatarUrl, setAvatarUrl] = useState(
        localStorage.getItem(`${currentUser}_avatar`) || ""
    );

    const handleSave = () => {
        localStorage.setItem(`${currentUser}_displayName`, displayName);
        localStorage.setItem(`${currentUser}_avatar`, avatarUrl);
        alert("Informações salvas com sucesso!");
    };

    return (
        <div className={styles.accountPage}>
            <h2>Editar Perfil</h2>
            <div className={styles.form}>
                <label>
                    Nome de exibição:
                    <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <label>
                    URL do avatar:
                    <input
                        type="text"
                        value={avatarUrl}
                        onChange={(e) => setAvatarUrl(e.target.value)}
                    />
                </label>
                <button onClick={handleSave} className={styles.saveButton}>
                    Salvar
                </button>
            </div>
        </div>
    );
}
