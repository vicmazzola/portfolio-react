import Card, {CardProps} from "../Card/Card.tsx"
import {useTranslation} from "react-i18next";
import images from "../Card/CardImages.tsx"
import Dropdown from "../Dropdown/Dropdown.tsx";
import {useState} from "react";
import { TbCertificate } from "react-icons/tb";



export default function Certificates() {

    const {t} = useTranslation();
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const handleFilterChange = (tag: string | null) => {
        setSelectedTag(tag);
    };

    const cards: CardProps[] = [
        {
            image: images.javascriptConcurrentOOP,
            title: t("aboutme.certificates.javascriptConcurrentOOP.title"),
            description: t("aboutme.certificates.javascriptConcurrentOOP.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.javascriptConcurrentOOP.modalContent"),
            iconCertificateLink:TbCertificate,
            certificateLink: t("aboutme.certificates.javascriptConcurrentOOP.certificateLink"),
            tags: ["front-end","javascript"]
        },
        {
            image: images.reactJSXHooks,
            title: t("aboutme.certificates.reactJSXHooks.title"),
            description: t("aboutme.certificates.reactJSXHooks.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.reactJSXHooks.modalContent"),
            iconCertificateLink:TbCertificate,
            certificateLink: t("aboutme.certificates.reactJSXHooks.certificateLink"),
            tags: ["front-end", "react","javascript"]

        },
        {
            image: images.javascriptFrontEnd,
            title: t("aboutme.certificates.javascriptFrontEnd.title"),
            description: t("aboutme.certificates.javascriptFrontEnd.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.javascriptFrontEnd.modalContent"),
            iconCertificateLink:TbCertificate,
            certificateLink: t("aboutme.certificates.javascriptFrontEnd.certificateLink"),
            tags: ["front-end","javascript","html", "css"]
        },
        {
            image: images.htmlCssFromScratch,
            title: t("aboutme.certificates.htmlCssFromScratch.title"),
            description: t("aboutme.certificates.htmlCssFromScratch.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.htmlCssFromScratch.modalContent"),
            iconCertificateLink:TbCertificate,
            certificateLink: t("aboutme.certificates.htmlCssFromScratch.certificateLink"),
            tags: ["front-end", "html", "css"]
        },
        {
            image: images.javaFundamentals,
            title: t("aboutme.certificates.javaFundamentals.title"),
            description: t("aboutme.certificates.javaFundamentals.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.javaFundamentals.modalContent"),
            iconCertificateLink:TbCertificate,
            certificateLink: t("aboutme.certificates.javaFundamentals.certificateLink"),
            tags: ["back-end", "java"]
        },
        {
            image: images.userExperience,
            title: t("aboutme.certificates.userExperience.title"),
            description: t("aboutme.certificates.userExperience.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.userExperience.modalContent"),
            iconCertificateLink:TbCertificate,
            certificateLink: t("aboutme.certificates.userExperience.certificateLink"),
            tags: ["ux-design"]
        },
        {
            image: images.programmingLogic,
            title: t("aboutme.certificates.programmingLogic.title"),
            description: t("aboutme.certificates.programmingLogic.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.programmingLogic.modalContent"),
            iconCertificateLink:TbCertificate,
            certificateLink: t("aboutme.certificates.programmingLogic.certificateLink"),
        },
        {
            image: images.fortinetFCF,
            title: t("aboutme.certificates.fortinetFCF.title"),
            description: t("aboutme.certificates.fortinetFCF.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.fortinetFCF.modalContent"),
            iconCertificateLink:TbCertificate,
            certificateLink: t("aboutme.certificates.fortinetFCF.certificateLink"),
            tags: ["cybersecurity"]
        },
        {
            image: images.fortinetFCA,
            title: t("aboutme.certificates.fortinetFCA.title"),
            description: t("aboutme.certificates.fortinetFCA.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.fortinetFCA.modalContent"),
            iconCertificateLink:TbCertificate,
            certificateLink: t("aboutme.certificates.fortinetFCA.certificateLink"),
            tags: ["cybersecurity"],
        },
        {

            image: images.figmaUnderstanding,
            title: t("aboutme.certificates.figmaUnderstanding.title"),
            description: t("aboutme.certificates.figmaUnderstanding.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.figmaUnderstanding.modalContent"),
            iconCertificateLink:TbCertificate,
            certificateLink: t("aboutme.certificates.figmaUnderstanding.certificateLink"),
            tags: ["ux-design"]
        },
        {
            image: images.pythonFirstApp,
            title: t("aboutme.certificates.pythonFirstApp.title"),
            description: t("aboutme.certificates.pythonFirstApp.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.pythonFirstApp.modalContent"),
            iconCertificateLink:TbCertificate,
            certificateLink: t("aboutme.certificates.pythonFirstApp.certificateLink"),
            tags: ["back-end", "python"]
        },
        {
            image: images.uxDesignProcess,
            title: t("aboutme.certificates.uxDesignProcess.title"),
            description: t("aboutme.certificates.uxDesignProcess.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.uxDesignProcess.modalContent"),
            iconCertificateLink:TbCertificate,
            certificateLink: t("aboutme.certificates.uxDesignProcess.certificateLink"),
            tags: ["ux-design"]
        },
        {
            image: images.uxFoundations,
            title: t("aboutme.certificates.uxFoundations.title"),
            description: t("aboutme.certificates.uxFoundations.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.uxFoundations.modalContent"),
            iconCertificateLink:TbCertificate,
            certificateLink: t("aboutme.certificates.uxFoundations.certificateLink"),
            tags: ["ux-design"]
        }
    ];


    const filteredCards = selectedTag
        ? cards.filter((card) => card.tags?.includes(selectedTag))
        : cards;

    const dropdownOptions = [
        {label: "All", value: null},
        {label: "Front-End", value: "front-end"},
        {label: "Back-End", value: "back-end"},
        {label: "React", value: "react"},
        // {label: "TypeScript", value: "typescript"},
        {label: "JavaScript", value: "javascript"},
        {label: "CSS", value: "css"},
        {label: "HTML", value: "html"},
        {label: "Java", value: "java"},
        {label: "Python", value: "python"},
        {label: "Cybersecurity", value: "cybersecurity"},
        {label: "Ux-Design", value: "ux-design"},
    ];


    return (
        <>
            {/* Filter Dropdown */}
            <div className="sticky top-0 bg-transparent z-10 flex justify-end mr-8 pb-2 pt-6 ">
                <Dropdown options={dropdownOptions} onSelect={handleFilterChange}/>
            </div>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 py-12 mx-6 my-2 overflow-x-hidden">
                {filteredCards.map((card, index) => (
                    <Card
                        key={index}
                        {...card}
                    />
                ))}
            </div>
        </>
    );
}


