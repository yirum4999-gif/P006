import { useState } from "react";

import {useTranslation} from "react-i18next";

import styles from "./SignupModal2.module.css"

import Button from "../../buttons/Button.jsx";
import AuthInput2 from "../../input/AuthInput2.jsx";

function SignupModal2 ({ onClose, onSignup }) {
    const { t } = useTranslation();

    const [form, setForm] = useState({
        email: "",
        nickname: "",
        password: "",
        passwordConfirm: ""
    });

    const [checked, setChecked] = useState({
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

    // 이메일 형식 검사
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // 이메일 중복 확인
    const handleEmailCheck = () => {
        if (!isValidEmail(form.email)) {
            setMessage((prev) => ({
                ...prev,
                email: t("signup.invalidEmail")
            }));
            return;
        }

        // TODO: 이메일 중복확인 API 연결
    };

    // 유저 - 닉네임 중복확인 + 길이 확인
    const handleNicknameCheck = () => {
        const nickname = form.nickname.trim();
        if (nickname.length < 3 || nickname.length > 20){
            setMessage((prev) => ({
                ...prev,
                nickname: t("signup.nicknameLength")
            }));
            return;
        }
        // TODO: 닉네임 중복확인 API 연결
    };

    // 제출 검증 - 예외처리
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checked.email || !checked.nickname ){
            alert(t("signup.checkDupliacte"));
            return;
        }

        if (form.password.length < 8) {
            alert(t("signup.passwordLength"));
            return;
        }

        if (form.password !== form.passwordConfirm) {
            alert(t("signup.passwordMismatch"));
            return;
        }

        onSignup(form);
    }
    return(
        <div className={styles.modalOverlay}>
            <div className={styles.signupModal}>
                <h2 className={styles.title}>{t("signup.title")}</h2>
                <div className={styles.signupInput}>
                    <form onSubmit={handleSubmit}>
                        <table className={styles.signupTable}>
                            <tbody>
                            <tr>
                                <th>
                                    <label htmlFor="email">{t("signup.email")}</label>
                                </th>
                                <td>
                                    <AuthInput2 id="email"
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                placeholder={t("signup.emailPH")}
                                                onChange={handleChange}/>
                                </td>
                                <td>
                                    <Button type="button" className={styles.button} onClick={handleEmailCheck}>
                                        <span>{t("signup.emailCheck")}</span>
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="nickname">{t("signup.nickName")}</label>
                                </th>
                                <td>
                                    <AuthInput2 id="nickname"
                                                name="nickname"
                                                type="text"
                                                value={form.nickname}
                                                placeholder={t("signup.nicknamePH")}
                                                onChange={handleChange}/>
                                </td>
                                <td>
                                    <Button type="button" className={styles.button} onClick={handleNicknameCheck}>
                                        <span>{t("signup.nicknameCheck")}</span>
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="password">{t("signup.password")}</label>
                                </th>
                                <td>
                                    <AuthInput2 id="password"
                                                name="password"
                                                type="password"
                                                value={form.password}
                                                placeholder={t("signup.passwordPH")}
                                                onChange={handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="passwordConfirm">{t("signup.passwordConfirm")}</label>
                                </th>
                                <td>
                                    <AuthInput2 id="passwordConfirm"
                                                name="passwordConfirm"
                                                type="password"
                                                value={form.passwordConfirm}
                                                placeholder={t("signup.passwordConfirmPH")}
                                                onChange={handleChange}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className={styles.btnGroup}>
                            <Button type="submit" className={styles.button}>
                                <span>{t("signup.submit")}</span>
                            </Button>
                            <Button type="button" className={styles.button} onClick={onClose}>
                                <span>{t("signup.cancel")}</span>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupModal2;