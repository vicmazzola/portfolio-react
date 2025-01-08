import Timeline from "./Timeline";
import Certificates from "./Certificates.tsx";
import { useTranslation } from "react-i18next";


const AboutMe: React.FC = () => {
    const { t } = useTranslation();


    return (
        <section>
            <p className="text-2xl text-white text-center p-8">
                {t("aboutme.text")}
            </p>
            <Timeline />
            <Certificates />
        </section>
    );
};

export default AboutMe;
