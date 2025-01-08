import Timeline from "./Timeline";
import Certificates from "./Certificates.tsx";


const AboutMe: React.FC = () => {
    return (
        <section>
            <p className="text-2xl text-white text-center p-8">This section contains some informations about me...</p>
            <Timeline />
            <Certificates/>
        </section>
    );
};

export default AboutMe;
