import Styles from "./AuthLabel.module.css"

function AuthLabel({htmlFor, children, className}) {
    return(
      <>
          <label htmlFor={htmlFor} className={`${Styles.label} ${className || ""}`}>{children}</label>
      </>
    );
}

export default AuthLabel;