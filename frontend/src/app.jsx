import { Routes, Route, useLocation } from "react-router";

import MainLayout from "./layouts/MainLayout/MainLayout.jsx";
import ModalLayout from "./layouts/ModalLayout/ModalLayout.jsx";

import Home from "./pages/Home/Home.jsx";

import LoginModal from "./components/modals/LoginModal/LoginModal.jsx";
import SignupModal2 from "./components/modals/SignupModal2/SignupModal2.jsx";

function App() {
    const location = useLocation();

    // 모달을 열기 전 페이지 위치
    const backgroundLocation = location.state?.backgroundLocation;

    // 일반 페이지에서 모달을 열었다면 해당 페이지를 배경으로 사용
    // 주소로 직접 /login 또는 /signup에 접근했다면 Home을 배경으로 사용
    const pageLocation = backgroundLocation ?? (
        location.pathname === "/login" ||
        location.pathname === "/signup"
            ? { pathname: "/" }
            : location
    );

    return (
        <>
            {/* 일반 페이지 */}
            <Routes location={pageLocation}>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>

            {/* 모달 페이지 */}
            <Routes>
                <Route element={<ModalLayout />}>
                    <Route path="/login" element={<LoginModal />} />
                    <Route path="/signup" element={<SignupModal2 />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
