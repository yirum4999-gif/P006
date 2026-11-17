import styles from "./AuthInput.module.css"

function AuthInput ({ name, type = "text", placeholder, value, onChange }) {
    return(
        <>
            <input
                className={styles.authInput}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    );
}

export default AuthInput;