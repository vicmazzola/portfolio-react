import {Link} from "react-router";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {Icons} from "../../lib/icons.ts";
import { useEffect } from "react";
const bgImageDark = '/bg-img-space-2400.jpg'; // Public folder path
const bgImageLight = '/bg-img-sky.jpg'; // Public folder path



export default function Header() {
    const {t, i18n} = useTranslation();
    const [theme, setTheme] = useState("dark");


    useEffect(() => {
        document.documentElement.classList.add(theme === "dark" ? "dark-mode" : "light-mode");
    }, []); // Runs only on mount



    const handleThemeToggle = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);

        document.documentElement.style.setProperty(
            '--bg-image',
            `url(${newTheme === "dark" ? bgImageDark : bgImageLight})`
        );
    };



    const handleLanguageChange = (selectedLanguage: "en" | "pt") => {
        // const newLanguage = i18n.language === "en" ? "pt" : "en";
        i18n.changeLanguage(selectedLanguage);
    };

    const LanguageIcon = Icons.language;
    const DarkMode = Icons.darkmode;
    const LightMode = Icons.lightmode;

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
                                <Link to="/">{t("home.header")}</Link>
                            </li>
                            <li>
                                <Link to="/projects">{t("projects.header")}</Link>
                            </li>
                            <li>
                                <Link to="/aboutme">{t("aboutme.header")}</Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/" className="text-xl hover:text-white focus:text-white active:text-white">
                                {t("home.header")}
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects"
                                  className="text-xl hover:text-white focus:text-white active:text-white">
                                {t("projects.header")}
                            </Link>
                        </li>
                        <li>
                            <Link to="/aboutme" className="text-xl hover:text-white focus:text-white active:text-white">
                                {t("aboutme.header")}
                            </Link>
                        </li>

                    </ul>
                </div>


                {/* Navbar End */}
                <div className="navbar-end">

                    {/* Theme Toggle Button */}
                    <button
                        onClick={handleThemeToggle}
                        className="btn bg-transparent text-2xl text-white m-1"
                    >
                        {theme === "dark" ? <LightMode /> : <DarkMode />}
                    </button>


                    {/* Language Button */}

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn bg-transparent text-2xl text-white m-1">
                        <LanguageIcon/></div>
                        <ul tabIndex={0}
                            className="dropdown-content menu bg-base-100 text-black rounded-box z-[1] w-52 p-2 shadow">
                            <li>
                                <a onClick={() => handleLanguageChange("en")}
                                   className={i18n.language === "en" ? "font-bold" : ""}
                                >
                                    English
                                </a>

                            </li>
                            <li>
                                <a onClick={() => handleLanguageChange("pt")}
                                   className={i18n.language === "pt" ? "font-bold" : ""}
                                >
                                    Português
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>

            </div>
        </header>
    );
}
