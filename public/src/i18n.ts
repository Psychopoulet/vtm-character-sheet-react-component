// deps

    // externals
    import i18n from "i18next";
    import { initReactI18next } from "react-i18next";
    import LanguageDetector from "i18next-browser-languagedetector";

    // locals
    import fr from "./languages/fr.json";
    import en from "./languages/en.json";

// module

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        "debug": true,
        "fallbackLng": "en",
        "resources": {
            "fr": { "translation": fr },
            "en": { "translation": en }
        }
    });

export default i18n;
