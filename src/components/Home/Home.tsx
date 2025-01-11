import Type from "../Type/Type.tsx";
import {useTranslation} from "react-i18next";
import Skill, {SkillProps} from "./Skill/Skill.tsx";
import Tools, {ToolsProps} from "./Tools/Tools.tsx";
import Languages, {LanguageProps} from "./Languages/Languages.tsx";
import {Icons} from "../../lib/icons.ts";
import avatar from "../../assets/avatar.jpg";
import styles from './Home.module.css'
import {Link} from "react-router";


export default function Home() {
    const {t, i18n} = useTranslation();
    console.log("Language selected:", i18n.language);
    const skillsArray: SkillProps[] = [
        new SkillProps(
            Icons.react,
            "React",
        ),
        new SkillProps(
            Icons.java,
            "Java",
        ),
        new SkillProps(
            Icons.sql,
            "SQL",
        ),
        new SkillProps(
            Icons.typescript,
            "TypeScript",
        ),
        new SkillProps(
            Icons.bootstrap,
            "Bootstrap",
        ),
        new SkillProps(
            Icons.tailwind,
            "Tailwind CSS",
        ),
        new SkillProps(
            Icons.vite,
            "Vite",
        )
    ];

    const toolsArray: ToolsProps[] = [
        new ToolsProps(
            Icons.github,
            "Github",
        ),
        new ToolsProps(
            Icons.webstorm,
            "WebStorm",
        ),
        new ToolsProps(
            Icons.vscode,
            "VS Code",
        ),
        new ToolsProps(
            Icons.intellij,
            "IntelliJ IDEA",
        )
    ];

    const languagesArray: LanguageProps[] = [
        new LanguageProps("brazil", t("home.languages.native")),
        new LanguageProps("uk", t("home.languages.advanced")),
        new LanguageProps("italy", t("home.languages.intermediate")),
        new LanguageProps("germany", t("home.languages.basic"))
    ];


    return (
        <>
            <div className="hero rounded text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="avatar">
                        <div className="w-52 rounded-full">
                            <img
                                src={avatar}
                            />
                        </div>
                    </div>

                    <div className="text px-10">
                        <h1 className="text-center lg:text-left text-3xl my-6 font-semibold">{t("home.hello")}</h1>
                        <h1 className="text-center lg:text-left text-3xl font-semibold">{t("home.name")}</h1>

                        {/*MOBILE*/}

                        <div className="p-6 text-xl text-center lg:hidden">
                            <Type
                                strings={[
                                    t("home.roles.developer"),
                                    t("home.roles.helpdesk"),
                                ]}
                            />
                        </div>

                        {/*DESKTOP*/}

                        <div className="py-6 text-3xl hidden lg:flex">
                            <Type
                                strings={[
                                    t("home.roles.developer"),
                                    t("home.roles.helpdesk"),
                                ]}
                            />
                        </div>
                        <p className="bg-black opacity-80 rounded-lg text-xl font-semibold p-6">{t("home.text")}</p>

                    </div>
                </div>
            </div>


            <p className="text-3xl text-white text-center mx-3 my-12">
                {t("home.skills")}
            </p>

            {/*// SKILLS MOBILE */}
            <div className="grid grid-cols-2 lg:flex-row gap-4 pt-12 px-8 mx-8 lg:hidden">
                {skillsArray.map((skill, index) => (
                    <Skill
                        key={index}
                        props={skill}

                    />
                    // <div className="divider"></div>
                ))}

            </div>

            {/*// SKILLS DESKTOP */}
            <div
                className={`flex-col lg:flex-row gap-4 py-12 px-4 justify-center hidden lg:flex ${styles.skills1280} overflow-x-hidden w-full`}>
                {skillsArray.map((skill, index) => (
                    <Skill
                        key={index}
                        props={skill}

                    />
                    // <div className="divider"></div>
                ))}

            </div>

            <p className="text-3xl text-white text-center mx-3 my-12">
                {t("home.tools")}
            </p>


            {/*// TOOLS MOBILE */}
            <div className="grid grid-cols-2 lg:flex-row gap-4 pt-12 px-8 mx-8 lg:hidden">
                {toolsArray.map((skill, index) => (
                    <Tools
                        key={index}
                        props={skill}

                    />
                    // <div className="divider"></div>
                ))}

            </div>

            {/*// TOOLS DESKTOP */}
            <div className="flex-col lg:flex-row gap-4 py-12 px-4 justify-center hidden lg:flex">
                {toolsArray.map((skill, index) => (
                    <Tools
                        key={index}
                        props={skill}

                    />
                    // <div className="divider"></div>
                ))}

            </div>


            <p className="text-3xl text-white text-center mx-3 my-12">
                {t("home.languages.header")}

            </p>

            {/*// LANGUAGES MOBILE */}
            <div className="grid grid-cols-2 lg:flex-row gap-4 pt-12 px-4 mx-8 lg:hidden">
                {languagesArray.map((language, index) => (
                    <Languages key={index} props={language}/>
                ))}

            </div>

            {/*// LANGUAGES DESKTOP */}
            <div className="flex-col lg:flex-row gap-4 py-12 px-4 justify-center hidden lg:flex">
                {languagesArray.map((language, index) => (
                    <Languages key={index} props={language}/>
                ))}

            </div>


            <div className="join flex justify-center py-6">
                <button className="join-item btn bg-black opacity-80 text-white">{t("pagination.home")}</button>
                <Link to="/projects" className="join-item btn bg-black opacity-80 text-white">»</Link>
            </div>

        </>
    );
}

