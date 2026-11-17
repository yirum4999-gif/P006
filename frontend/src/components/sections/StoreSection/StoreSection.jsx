import {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";

import Section from "../../commons/Section/Section.jsx";
import Carousel from "../../commons/ImageWrapper/Carousel.jsx";

import { cardData } from "./cardData.js";

import styles from "./StoreSection.module.css"

function StoreSection (){
    const {t} = useTranslation();

    const [currentIndex, setCurrentIndex] = useState(0);

    const [isPlaying] = useState(true);
    const interval = 5000;

    useEffect(() => {
        if (!isPlaying || cardData.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % cardData.length
            );
        }, interval);
        return () => clearInterval(timer);
    }, [isPlaying, interval]);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            (prev - 1 + cardData.length) % cardData.length
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            (prev + 1) % cardData.length
        );
    };

    const handleCardClick = (item) => {
        console.log("select card", item)
    }

    return(
        <Section title={t("store.title")}>
            <div className={styles.container}>
                <Carousel items={cardData}
                          currentIndex={currentIndex}
                          onCardClick={handleCardClick}
                          onPrev={handlePrev}
                          onNext={handleNext}
                />
            </div>
        </Section>
    );
}

export default StoreSection;