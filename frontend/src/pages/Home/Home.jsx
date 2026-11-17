/*
ver2
date:26.11.06
*/
import {useTranslation} from "react-i18next";
import {useState} from "react";

import styles from "./Home.module.css"
import AreaSearchSection from "../../components/sections/AreaSection/AreaSearchSection.jsx";
import StoreSection from "../../components/sections/StoreSection/StoreSection.jsx";
import GenreSection from "../../components/sections/GenreSection/GenreSection.jsx";

function Home() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.mainContent}>
                <StoreSection/>
                <AreaSearchSection/>
                <GenreSection/>
            </div>
        </div>
    );
}

export default Home;
