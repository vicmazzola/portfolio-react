import Type from "../Type/Type.tsx";
import {useTranslation} from "react-i18next";
import Skill, {SkillProps} from "./Skill/Skill.tsx";
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

            {/*// MOBILE */}
            <div className="flex flex-col lg:flex-row gap-4 py-12 px-4 lg:hidden">
                {skillsArray.map((skill, index) => (
                    <Skill
                        key={index}
                        props={skill}

                    />
                    // <div className="divider"></div>
                ))}

            </div>

            {/*// DESKTOP */}
            <div className="flex-col lg:flex-row gap-4 py-12 px-4 hidden lg:flex">
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

