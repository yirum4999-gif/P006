// 스트링키 스크립트
// i18n java script

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import jpn from "./locales/JPN.json";
import kor from "./locales/KOR.json";
import eng from "./locales/ENG.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ja: { translation: jpn },
            ko: { translation: kor },
            en: { translation: eng }
        },
        lng: "ja",
        fallbackLng: "ja",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;