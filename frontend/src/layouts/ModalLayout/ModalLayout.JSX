import { Outlet } from "react-router";

import styles from "./ModalLayout.module.css";

function ModalLayout() {
    return (
        <div className={styles.modalOverlay}>
            <Outlet />
        </div>
    );
}

export default ModalLayout;