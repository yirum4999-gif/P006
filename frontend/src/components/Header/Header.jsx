// Ver 01.1
// 2026 11 11

// [기존] 로그인 모달 상태 관리 방식
// import { useState } from "react";

import { useNavigate, useLocation } from "react-router";

// [미전달] JSON 데이터
// import navigation from "../../datas/main-nav.json";

import styles from "./Header.module.css";

// [미전달] 컴포넌트
// import SearchBar from "../Search/SearchBar.jsx";
// import LanguageSelector from "../language/LanguageSelector.jsx";

// [기존] Header에서 직접 모달 렌더링
// import LoginModal from "../modals/LoginModal/LoginModal.jsx";

function Header() {

    /*
    // [기존] useState 방식
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    */

    const navigate = useNavigate();
    const location = useLocation();

    // 로그인 모달 열기
    const handleLoginClick = () => {
        navigate("/login", {
            state: {
                backgroundLocation: location
            }
        });
    };

    return (
        <header className={styles.siteHeader}>

            {/* 헤더 상단 */}
            <div className={styles.headerTop}>

                {/* [미전달] 로고 */}
                {/* <Header.Logo /> */}

                {/* [미전달] 검색창 */}
                {/* <Header.Search /> */}

                {/*
                [기존] useState 방식
                <Header.Actions
                    onLoginClick={() => setIsLoginOpen(true)}
                />
                */}

                <Header.Actions
                    onLoginClick={handleLoginClick}
                />
            </div>

            {/* [미전달] 네비게이션 */}
            {/* <Header.Nav /> */}

            {/*
            [기존] Header에서 로그인 모달 직접 렌더링

            {isLoginOpen && (
                <LoginModal
                    onClose={() => setIsLoginOpen(false)}
                />
            )}
            */}

        </header>
    );
}

/*
// [미전달] navigation JSON을 사용하는 로고
function Logo() {
    const { logo } = navigation;

    return (
        <a className={styles.siteLogo} href={logo.href}>
            {logo.text}
        </a>
    );
}
*/

/*
// [미전달] SearchBar 컴포넌트
function Search() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const keyword = e.target.elements.keyword.value;
        console.log("검색어", keyword);
    };

    return (
        <form className={styles.headerSearch} onSubmit={handleSubmit}>
            <SearchBar />
            <button className={styles.searchBtn} type="submit">
                <i className="bi bi-search"></i>
                <span>검색</span>
            </button>
        </form>
    );
}
*/

// 상단 액션 버튼
function Actions({ onLoginClick }) {
    return (
        <div className={styles.headerActionBtn}>
            <button
                className={styles.login}
                type="button"
                onClick={onLoginClick}
            >
                <i className="bi bi-box-arrow-in-right"></i>
                LOG-IN
            </button>

            {/* [미전달] 언어 선택 */}
            {/* <LanguageSelector /> */}
        </div>
    );
}

/*
// [미전달] navigation JSON을 사용하는 네비게이션
function MainNav() {
    return (
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
*/

// [미전달] 컴포넌트 등록
// Header.Logo = Logo;
// Header.Search = Search;
// Header.Nav = MainNav;

Header.Actions = Actions;

export default Header;
