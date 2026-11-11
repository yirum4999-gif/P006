import { useNavigate } from "react-router";
import {useTranslation} from "react-i18next";

import styles from "./LoginPage.module.css"
import AuthLabel from "../../components/AuthInput/AuthLabel.jsx";
import AuthInput from "../../components/AuthInput/AuthInput.jsx";

function LoginPage(){
    const { t } = useTranslation();
    const navigate = useNavigate();
    return(
        <div className={styles.loginContainer}>
            <h2 className={styles.title}>{t("loginPage.title")}</h2>
            <table className={styles.loginPageTable}>
                <tbody>
                <tr>
                    <th>
                        <AuthLabel htmlFor="username">{t("loginPage.username")}</AuthLabel>
                    </th>
                    <td>
                        <AuthInput id="username"
                                   name="username"
                                   type="text"
                                   placeholder={t("loginPage.IdPH")}
                        />
                    </td>
                </tr>
                <tr>
                    <th>
                        <AuthLabel htmlFor="password">{t("loginPage.password")}</AuthLabel>
                    </th>
                    <td>
                        <AuthInput id="password"
                                   name="password"
                                   type="password"
                                   placeholder={t("loginPage.passwordPH")}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
            <div className={styles.loginOptions}>
                <label>
                    <input type="checkbox" />
                    {t("loginPage.saveName")}
                </label>

                <label>
                    <input type="checkbox" />
                    {t("loginPage.saveUser")}
                </label>

                <button
                    type="button"
                    className={styles.signupButton}
                    onClick={() => navigate("/signup")}
                >
                    {t("loginPage.signup")}
                </button>
            </div>
            <div className={styles.closeArea}>
                <button type="button"
                        className={styles.closeButton}
                        onClick={() => navigate("/home")}>
                    {t("loginPage.close")}
                </button>
            </div>
        </div>
    );
}

export default LoginPage;