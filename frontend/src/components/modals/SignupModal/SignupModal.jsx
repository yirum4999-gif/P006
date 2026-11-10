import { useState } from "react";

import AuthInput from "../../input/AuthInput.jsx";
import Button from "../../buttons/Button.jsx";

import {useTranslation} from "react-i18next";

import styles from "./SignupModal.module.css"

function SignupModal({ onClose, onSignup }){
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
              <h3 className={styles.title}>{t("signup.title")}</h3>
              <form onSubmit={handleSubmit}>
                  <div className={styles.signupInput}>
                      <div className={styles.inputRow}>
                          <AuthInput name="email"
                                     label={t("signup.email")}
                                     placeholder={t("signup.emailPH")}
                                     value={form.email}
                                     onChange={handleChange}
                          />
                          <Button type="button" className={styles.button} onClick={handleEmailCheck}>
                              <span>{t("signup.emailCheck")}</span>
                          </Button>
                          {message.email && (
                              <p className={styles.errMessage}>
                                  {message.email}
                              </p>
                          )}
                      </div>
                      <div className={styles.inputRow}>
                          <AuthInput name="nickname"
                                     label={t("signup.nickName")}
                                     placeholder={t("signup.nicknamePH")}
                                     value={form.nickname}
                                     onChange={handleChange}
                          />
                          <Button type="button" className={styles.button} onClick={handleNicknameCheck}>
                              <span>{t("signup.nicknameCheck")}</span>
                          </Button>
                          {message.nickname && (
                              <p className={styles.errMessage}>
                                  {message.nickname}
                              </p>
                          )}
                      </div>
                      <div className={styles.inputRow}>
                          <AuthInput name="password"
                                     label={t("signup.password")}
                                     placeholder={t("signup.passwordPH")}
                                     value={form.password}
                                     onChange={handleChange}
                          />
                      </div>
                      <div className={styles.inputRow}>
                          <AuthInput name="passwordConfirm"
                                     label={t("signup.passwordConfirm")}
                                     placeholder={t("signup.passwordConfirmPH")}
                                     onChange={handleChange}
                          />
                      </div>
                  </div>
                  <div className={styles.btnGroup}>
                      <Button type="submit" className={styles.SignupBtn}>
                          <span>{t("signup.submit")}</span>
                      </Button>
                      <Button type="button" className={styles.CancelBtn} onClick={onClose}>
                          <span>{t("signup.cancel")}</span>
                      </Button>
                  </div>
              </form>
          </div>
      </div>
    );
}

export default SignupModal;