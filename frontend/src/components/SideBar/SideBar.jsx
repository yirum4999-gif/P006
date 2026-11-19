import navigation from "../../datas/menu-data.json";
import styles from "./SideBar.module.css";

function Sidebar({
                     activeMenu,
                     onMenuChange,
                     isOpen,
                     onToggle,
                 }) {
    return (
        <aside
            className={`${styles.sidebar} ${
                isOpen ? styles.open : styles.closed
            }`}
        >
            <div className={styles.sidebarInner}>
                <div className={styles.sidebarMenu}>
                    {navigation.items.map((menu) => (
                        <button
                            key={menu.id}
                            type="button"
                            className={`${styles.sidebarItem} ${
                                activeMenu === menu.id
                                    ? styles.active
                                    : ""
                            }`}
                            onClick={() => onMenuChange(menu.id)}
                            tabIndex={isOpen ? 0 : -1}
                        >
                            <span className={styles.sidebarIcon}>
                                <i className={`bi ${menu.icon}`}></i>
                            </span>

                            <span className={styles.sidebarLabel}>
                                {menu.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <button
                className={styles.sidebarToggle}
                onClick={onToggle}
                aria-label={isOpen ? "사이드바 접기" : "사이드바 펼치기"}
                aria-expanded={isOpen}
            >
                {isOpen ? "◀" : "▶"}
            </button>
        </aside>
    );
}

export default Sidebar;