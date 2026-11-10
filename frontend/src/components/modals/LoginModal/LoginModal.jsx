import { useTranslation } from "react-i18next";

import styles from "./LoginModal.module.css"

// onClose : 모달 닫기, 열기 때문에
// <LoginModal onClose={() => setIsLoginOpen(false)} />

function LoginModal ({ onClose, onSignupClick }){
    const { t } = useTranslation();
    return(
        <div className={styles.modalOverlay}>
            <div className={styles.loginModal}>
                <div className={styles.loginContent}>
                    <h3 className={styles.loginTitle}>
                        {t("login.title")}
                    </h3>
                    <div className={styles.loginInput}>
                        <div className={styles.inputRow}>
                            <label>{t("login.username")}</label>
                            <input type="text" placeholder={t("login.usernamePlaceholder")}/>
                        </div>

                        <div className={styles.inputRow}>
                            <label>{t("login.password")}</label>
                            <input type="password" placeholder={t("login.passwordPlaceholder")} />
                        </div>

                        <button  className={styles.submitButton} type="button">{t("login.submit")}</button>
                    </div>
                    <div className={styles.loginOptions}>
                        <label>
                            <input type="checkbox" />
                            {t("login.saveName")}
                        </label>

                        <label>
                            <input type="checkbox" />
                            {t("login.saveUser")}
                        </label>

                        <button
                            type="button"
                            className={styles.signupButton}
                            onClick={onSignupClick}
                        >
                            {t("login.signup")}
                        </button>
                    </div>
                    <div className={styles.closeArea}>
                        <button className={styles.closeButton} type="button" onClick={onClose}>
                            {t("login.close")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;