import { useTranslation } from "react-i18next";

import Button from "../../Button/Button.jsx"

import styles from "./GenreList.module.css";
import CustomImage from "../../commons/ImageWrapper/CustomImage.jsx";

function GenreList({ items, onGenreClick }) {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            {items.map((item) => (
                <Button
                    key={item.id}
                    className={styles.genreButton}
                    onClick={() => onGenreClick(item)}
                >
                    {item.src ? (
                        <CustomImage
                            src={item.src}
                            title={t(item.title)}
                        />
                    ) : (
                        <div className={styles.noImage}>
                            <i className="bi bi-image"></i>
                        </div>
                    )}

                    <div className={styles.overlay}>
                        <strong className={styles.title}>
                            {t(item.title)}
                        </strong>

                        <p className={styles.description}>
                            {t(item.description)}
                        </p>
                    </div>
                </Button>
            ))}
        </div>
    );
}

export default GenreList;