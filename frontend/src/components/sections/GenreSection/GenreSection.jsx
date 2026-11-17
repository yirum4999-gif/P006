import { useTranslation } from "react-i18next";

import Section from "../../commons/Section/Section.jsx";
import GenreList from "./GenreList.jsx";
import GenreTagList from "./GenreTagList.jsx";

import styles from "./GenreSection.module.css"

import { genreData } from "./genreData.js";
import { genreTagData } from "./GenreTagData.js";


function GenreSection () {
    const { t } = useTranslation();

    const handleGenreClick = (item) => {
        console.log("select genre", item);
    };

    const handleTagClick = (item) => {
        console.log("select tag", item);
    };

    return(
        <Section title={t("genre.title")}>
            <div className={styles.container}>
                <GenreList
                    items={genreData}
                    onGenreClick={handleGenreClick}
                />
                <GenreTagList
                    items={genreTagData}
                    onTagClick={handleTagClick}
                />
            </div>
        </Section>
    );
}

export default GenreSection;