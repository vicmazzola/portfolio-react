import Type from "../Type/Type.tsx";
import {useTranslation} from "react-i18next";
import Skill, {SkillProps} from "./Skill/Skill.tsx";
import Tools, {ToolsProps} from "./Tools/Tools.tsx";
import Languages, {LanguageProps} from "./Languages/Languages.tsx";
import {Icons} from "../../lib/icons.ts";


export default function Home() {
    const { t, i18n } = useTranslation();
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


    return (
        <>
            <p className="text-3xl text-white text-center my-6">
                {t("home.hello")}
            </p>
            <p className="text-2xl text-white text-center my-12">
                {t("home.name")}
            </p>
            <div className="text-2xl text-white text-center">
                <Type
                    strings={[
                        t("home.roles.developer"),
                        t("home.roles.helpdesk"),
                    ]}
                />
            </div>
            <p className="text-2xl text-white text-center mx-3 my-12">
                {t("home.text")}
            </p>
            <p className="text-3xl text-white text-center mx-3 my-12">
                {t("home.skills")}
            </p>

            {/*// SKILLS MOBILE */}
            <div className="grid grid-cols-2 lg:flex-row gap-4 py-12 px-8 mx-8 lg:hidden">
                {skillsArray.map((skill, index) => (
                    <Skill
                        key={index}
                        props={skill}

                    />
                    // <div className="divider"></div>
                ))}

            </div>

            {/*// SKILLS DESKTOP */}
            <div className="flex-col lg:flex-row gap-4 py-12 px-4 justify-center hidden lg:flex">
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
            <div className="grid grid-cols-2 lg:flex-row gap-4 py-12 px-8 mx-8 lg:hidden">
                {toolsArray.map((skill, index) => (
                    <Skill
                        key={index}
                        props={skill}

                    />
                    // <div className="divider"></div>
                ))}

            </div>

            {/*// TOOLS DESKTOP */}
            <div className="flex-col lg:flex-row gap-4 py-12 px-4 justify-center hidden lg:flex">
                {toolsArray.map((skill, index) => (
                    <Skill
                        key={index}
                        props={skill}

                    />
                    // <div className="divider"></div>
                ))}

            </div>


            <p className="text-3xl text-white text-center mx-3 my-12">
                {t("home.languages")}
            </p>

            {/*// LANGUAGES MOBILE */}
            <div className="grid grid-cols-2 lg:flex-row gap-4 py-12 px-8 mx-8 lg:hidden">
                {languagesArray.map((skill, index) => (
                    <Skill
                        key={index}
                        props={skill}

                    />
                    // <div className="divider"></div>
                ))}

            </div>

            {/*// LANGUAGES DESKTOP */}
            <div className="flex-col lg:flex-row gap-4 py-12 px-4 justify-center hidden lg:flex">
                {skillsArray.map((skill, index) => (
                    <Skill
                        key={index}
                        props={skill}

                    />
                    // <div className="divider"></div>
                ))}

            </div>


        </>
    );
}

