import { useTranslation } from "react-i18next";

import Button from "../../Button/Button.jsx"

import styles from "./GenreTagList.module.css";

function GenreTagList({ items, onTagClick }) {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            {items.map((group) => (
                <div key={group.id} className={styles.group}>

                    <span className={styles.groupTitle}>
                        {t(group.title)}
                    </span>

                    <div className={styles.tagList}>
                        {group.tags.map((tag) => (
                            <Button
                                key={tag.id}
                                className={styles.tagButton}
                                onClick={() => onTagClick(tag)}
                            >
                                {t(tag.title)}
                            </Button>
                        ))}
                    </div>

                </div>
            ))}
        </div>
    );
}

export default GenreTagList;