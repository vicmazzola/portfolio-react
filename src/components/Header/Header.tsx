import {Link} from "react-router";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import styles from "./Header.module.css"


export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { t, i18n } = useTranslation();

    const handleToggle = () => {
        setIsDarkMode((prev) => !prev);
        // Optionally, you can add logic here to change a global theme (e.g., Tailwind's `data-theme` attribute)
        document.documentElement.setAttribute("data-theme", isDarkMode ? "light" : "dark");
    };

    const handleLanguageChange = () => {
        const newLanguage = i18n.language === "en" ? "pt" : "en";
        i18n.changeLanguage(newLanguage);
    };

    return (
        <header>
            <div className="navbar bg-transparent text-white">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link to="/">{t("home")}</Link>
                            </li>
                            <li>
                                <Link to="/projects">{t("projects")}</Link>
                            </li>
                            <li>
                                <Link to="/skills">{t("skills")}</Link>
                            </li>
                            <li>
                                <Link to="/aboutme">{t("aboutMe")}</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/">
                        <a className={`btn btn-ghost text-start ml-0 font-semibold text-white tracking-wide leading-tight whitespace-nowrap ${styles.title}`}>{t("header")}</a>
                    </Link>


                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/" className="text-xl hover:text-white">
                                {t("home")}
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="text-xl hover:text-white">
                                {t("projects")}
                            </Link>
                        </li>
                        <li>
                            <Link to="/skills" className="text-xl hover:text-white">
                                {t("skills")}
                            </Link>
                        </li>
                        <li>
                            <Link to="/aboutme" className="text-xl hover:text-white">
                                {t("aboutMe")}
                            </Link>
                        </li>
                    </ul>
                </div>


                {/* Navbar End */}
                <div className="navbar-end">
                    <button className="btn" onClick={handleLanguageChange}>
                        {i18n.language === "en" ? "PT" : "EN"}
                    </button>
                </div>

            </div>
        </header>
    );
}
