import {useTranslation} from "react-i18next";

import styles from "./SignupPage.module.css"
import AuthLabel from "../../components/AuthInput/AuthLabel.jsx";
import AuthInput from "../../components/AuthInput/AuthInput.jsx";
import {useState} from "react";
import Button from "../../components/Button/Button.jsx";

function SignupPage(){
    const { t } = useTranslation();
    const [form, setForm] = useState({
        username:"",
        email: "",
        nickname: "",
        password: "",
        passwordConfirm: ""
    });

    const [checked, setChecked] = useState({
        username: false,
        email: false,
        nickname: false
    });

    const [message, setMessage] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
        if (name === "email" || name === "nickname") {
            setChecked((prev) => ({
                ...prev,
                [name]: false
            }));

            setMessage((prev) => ({
                ...prev,
                [name]: ""
            }));
        }
    };
    const handleSubmit =(e) => {
        e.preventDefault();
    }
    return(
        <div className={styles.signUpContainer}>
            <h2 className={styles.title}>{t("signupPage.title")}</h2>
            <form onSubmit={handleSubmit}>
                <table className={styles.signupPageTable}>
                    <tbody>
                    <tr>
                        <th>
                            <AuthLabel htmlFor="username">{t("signupPage.username")}</AuthLabel>
                        </th>
                        <td>
                            <AuthInput id="username"
                                       name="username"
                                       type="text"
                                       value={form.username}
                                       placeholder={t("signupPage.usernamePH")}
                                       onChange={handleChange}/>
                        </td>
                        <td>
                            <Button type="button" className={styles.button} onClick={checked}>
                                <span>{t("signupPage.button")}</span>
                            </Button>
                            {message.username && (
                                <p className={styles.errMessage}>
                                    {message.username}
                                </p>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <AuthLabel htmlFor="email">{t("signupPage.email")}</AuthLabel>
                        </th>
                        <td>
                            <AuthInput id="email"
                                       name="email"
                                       type="text"
                                       value={form.email}
                                       placeholder={t("signupPage.usernamePH")}
                                       onChange={handleChange}/>
                        </td>
                        <td>
                            <Button type="button" className={styles.button} onClick={"checked"}>
                                <span>{t("signupPage.button")}</span>
                            </Button>
                            {message.email && (
                                <p className={styles.errMessage}>
                                    {message.email}
                                </p>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <AuthLabel htmlFor="nickname">{t("signupPage.nickname")}</AuthLabel>
                        </th>
                        <td>
                            <AuthInput id="nickname"
                                       name="nickname"
                                       type="nickname"
                                       value={form.nickname}
                                       placeholder={t("signupPage.nicknamePH")}
                                       onChange={handleChange}/>
                        </td>
                        <td>
                            <Button type="button" className={styles.button} onClick={"checked"}>
                                <span>{t("signupPage.button")}</span>
                            </Button>
                            {message.nickname && (
                                <p className={styles.errMessage}>
                                    {message.nickname}
                                </p>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <AuthLabel htmlFor="password">{t("signupPage.password")}</AuthLabel>
                        </th>
                        <td>
                            <AuthInput id="password"
                                       name="password"
                                       type="password"
                                       value={form.password}
                                       placeholder={t("signupPage.passwordPH")}
                                       onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <AuthLabel htmlFor="passwordConfirm">{t("signupPage.passwordConfirm")}</AuthLabel>
                        </th>
                        <td>
                            <AuthInput id="passwordConfirm"
                                       name="passwordConfirm"
                                       type="passwordConfirm"
                                       value={form.passwordConfirm}
                                       placeholder={t("signupPage.pwConfirmPH")}
                                       onChange={handleChange}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className={styles.btnGroup}>
                    <Button type="submit" className={styles.button}>
                        <span>{t("signupPage.submit")}</span>
                    </Button>
                    <Button type="button" className={styles.button} onClick="">
                        <span>{t("signupPage.cancel")}</span>
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SignupPage;