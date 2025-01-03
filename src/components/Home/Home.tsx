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

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 py-12 px-4 sm:px-6 lg:px-8">
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

