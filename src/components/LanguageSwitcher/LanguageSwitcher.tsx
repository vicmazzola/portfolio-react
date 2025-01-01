import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const handleLanguageChange = () => {
        const newLanguage = i18n.language === "en" ? "pt" : "en";
        i18n.changeLanguage(newLanguage);
    };

    return (
        <button onClick={handleLanguageChange}>
            {i18n.language === "en" ? "Português" : "English"}
        </button>
    );
}
