// Ver 01 
// 2026 11 10
import { useState } from "react";

import navigation from "../../datas/main-nav.json";

import styles from "./Header.module.css"

import SearchBar from "../Search/SearchBar.jsx";
import LanguageSelector from "../language/LanguageSelector.jsx";
import LoginModal from "../modals/LoginModal/LoginModal.jsx";

function Header(){
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    return(
        <header className={styles.siteHeader}>

            {/* 헤더 상단 */}
            <div className={styles.headerTop}>
                <Header.Logo />
                <Header.Search />
                <Header.Actions
                    onLoginClick={() => setIsLoginOpen(true)}
                />
            </div>
            {/* 헤더 히단 - 네브 */}
            <Header.Nav />

            {/* 로그인 모달 */}
            {isLoginOpen && (
                <LoginModal
                    onClose={() => setIsLoginOpen(false)}
                />
            )}

        </header>
    );
}

// 로고
function Logo() {
    const { logo } = navigation;
    return (
        <a className={styles.siteLogo} href={logo.href}>
            {logo.text}
        </a>
    );
}

// 검색창
function Search(){

    // HandleSubmit (검색 이벤트 처리)
    const handleSubmit = (e) => {
        e.preventDefault();
        const keyword = e.target.elements.keyword.value;
        console.log("검색어",keyword);
    }

    return (
        <form className={styles.headerSearch} onSubmit={handleSubmit}>
            <SearchBar />
            <button className={styles.searchBtn}  type="submit">
                <i className="bi bi-search"></i>
                <span>검색</span>
            </button>
        </form>
    );
}

// 상단 액션 버튼
function Actions({ onLoginClick }) {
    return (
        <div className={styles.headerActionBtn}>
            <button className={styles.login}
                    type="button"
                    onClick={onLoginClick}
            >
                <i className="bi bi-box-arrow-in-right"></i>
                LOG-IN
            </button>
            <LanguageSelector />
        </div>
    );
}

// 네비게이션 메뉴
function MainNav(){
    return(
        <nav className={styles.siteNav} aria-label="main-menu">
            {navigation.items.map((item) => (
                <div className="nav-item" key={item.id}>
                    <a href={item.href}>
                        {item.label}
                    </a>
                </div>
            ))}
        </nav>
    );
}

Header.Logo = Logo;
Header.Search = Search;
Header.Nav = MainNav;
Header.Actions = Actions;

export default Header;
