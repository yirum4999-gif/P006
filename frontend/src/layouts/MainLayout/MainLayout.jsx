import { useState } from "react";

import Header from "../../components/Header/Header.jsx";
import Sidebar from "../../components/SideBar/SideBar.jsx";

function MainLayout({page, activeMenu, onPageChange}){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <div>
            <Header />

            <Sidebar
                activeMenu={activeMenu}
                onMenuChange={onPageChange}
                isOpen={isSidebarOpen}
                onToggle={() => setIsSidebarOpen(prev => !prev)}
            />

            <main>
                {page}
            </main>
        </div>

    );
}

export default MainLayout;