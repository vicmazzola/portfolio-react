import Timeline from "./Timeline";
import Certificates from "./Certificates.tsx";
import { useTranslation } from "react-i18next";
import {Link} from "react-router";



const AboutMe: React.FC = () => {
    const { t } = useTranslation();





    return (
        <section>
            <p className="text-3xl text-white text-center p-8">
                {t("aboutme.text")}
            </p>
            <Timeline/>
            <p className="text-3xl text-white text-center p-8">
                {t("aboutme.certificate")}
            </p>
            <Certificates/>


            <div className="join flex justify-center py-6">
                <Link to="/projects" className="join-item btn bg-black opacity-80 text-white">«</Link>
                <button className="join-item btn bg-black opacity-80 text-white">About Me</button>
            </div>

        </section>
    );
};

export default AboutMe;
