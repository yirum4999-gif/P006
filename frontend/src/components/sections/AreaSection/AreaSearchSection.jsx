import { useTranslation } from "react-i18next";

import styles from "./AreaSearchSection.module.css"

import Section from "../../commons/Section/Section.jsx";
import ImageButton from "../../commons/ImageButton/ImageButton.jsx";
import Label from "../../commons/LabelAndLink/Label.jsx";
import TextLink from "../../commons/LabelAndLink/TextLink.jsx";

const areaImages = import.meta.glob(
    "/src/assets/AreaImages/*",
    {
        eager: true,
        query: "?url",
        import: "default"
    }
);

const getAreaImage = (filename) =>
    areaImages[`/src/assets/AreaImages/${filename}`];

const popularAreas = [
    {
        id: "tokyo",
        image: getAreaImage("KT_tokyo.jpg"),
        label: "area.tokyo",
        status: "active"
    },
    {
        id: "chiba",
        image: getAreaImage("KT_tokyo.jpg"),
        label: "area.chiba",
        status: "comingSoon"
    },
    {
        id: "saitama",
        image: getAreaImage("KT_tokyo.jpg"),
        label: "area.saitama",
        status: "comingSoon"
    },
    {
        id: "kawasaki",
        image: getAreaImage("KT_tokyo.jpg"),
        label: "area.kawasaki",
        status: "comingSoon"
    },
    {
        id: "yokohama",
        image: getAreaImage("KT_tokyo.jpg"),
        label: "area.yokohama",
        status: "comingSoon"
    },
    {
        id: "kyoto",
        image: getAreaImage("KS_kyoto.jpg"),
        label: "area.kyoto",
        status: "comingSoon"
    },
    {
        id: "osaka",
        image: getAreaImage("KS_osaka.jpg"),
        label: "area.osaka",
        status: "comingSoon"
    },
    {
        id: "kobe",
        image: getAreaImage("KS_osaka.jpg"),
        label: "area.kobe",
        status: "comingSoon"
    },
    {
        id: "nagoya",
        image: getAreaImage("KS_osaka.jpg"),
        label: "area.nagoya",
        status: "comingSoon"
    },
    {
        id: "nara",
        image: getAreaImage("KS_osaka.jpg"),
        label: "area.nara",
        status: "comingSoon"
    }
];

// 지역 그룹 데이터
const areaGroups = [
    {
        title: "area.groups.kanto",
        areas: [
            { code: "tokyo", label: "area.tokyo" },
            { code: "kanagawa", label: "area.kanagawa" },
            { code: "saitama", label: "area.saitama" },
            { code: "chiba", label: "area.chiba" },
            { code: "tochigi", label: "area.tochigi" }
        ]
    }
];

function AreaSearchSection(){
    const { t } = useTranslation();

    const handleAreaClick = (areaCode) => {
        console.log("선택 지역:", areaCode);
    };

    return(
        <Section title={t("area.title")}>
            <div className={styles.container}>
                <div className={styles.popularAreas}>
                    {popularAreas.map((area) => (
                        <ImageButton key={area.id}
                                     image={area.image}
                                     label={t(area.label)}
                                     onClick={() => handleAreaClick(area.id)}/>
                    ))}
                </div>
                <div className={styles.areaGroups}>
                    {areaGroups.map((group) => (
                        <div
                            key={group.title}
                            className={styles.areaGroup}
                        >
                            <Label>
                                {t(group.title)}
                            </Label>

                            <div className={styles.areaLinks}>
                                {group.areas.map((area) => (
                                    <TextLink
                                        key={area.code}
                                        onClick={() => handleAreaClick(area.code)}
                                    >
                                        {t(area.label)}
                                    </TextLink>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default AreaSearchSection;