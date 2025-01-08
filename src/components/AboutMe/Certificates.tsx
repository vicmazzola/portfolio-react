import Card, {CardProps} from "../Card/Card.tsx"
import {useTranslation} from "react-i18next";
import images from "../Card/CardImages.tsx"


export default function Certificates() {

    const {t} = useTranslation();

    const cards: CardProps[] = [
        {
            image: images.javascriptConcurrentOOP,
            title: t("aboutme.certificates.javascriptConcurrentOOP.title"),
            description: t("aboutme.certificates.javascriptConcurrentOOP.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.javascriptConcurrentOOP.modalContent"),
            githubRepo:  t("aboutme.certificates.javascriptConcurrentOOP.githubRepo"),
            liveDemo:  t("aboutme.certificates.javascriptConcurrentOOP.liveDemo"),
        },
        {
            image: images.reactJSXHooks, // Replace with the correct image import name
            title: t("aboutme.certificates.reactJSXHooks.title"),
            description: t("aboutme.certificates.reactJSXHooks.description"),
            modalContent: t("aboutme.certificates.reactJSXHooks.modalContent"),
            githubRepo: null,
            liveDemo: null,
        },
        {
            image: images.javascriptFrontEnd, // Replace with the correct image name
            title: t("aboutme.certificates.javascriptFrontEnd.title"),
            description: t("aboutme.certificates.javascriptFrontEnd.description"),
            modalContent: t("aboutme.certificates.javascriptFrontEnd.modalContent"),
            githubRepo: null,
            liveDemo: "null"
        },
        {
            image: images.htmlCssFromScratch, // Replace with the correct image name
            title: t("aboutme.certificates.htmlCssFromScratch.title"),
            description: t("aboutme.certificates.htmlCssFromScratch.description"),
            modalContent: t("aboutme.certificates.htmlCssFromScratch.modalContent"),
            githubRepo: null,
            liveDemo: null
        },
        {
            image: images.javaFundamentals, // Replace with the correct image name
            title: t("aboutme.certificates.javaFundamentals.title"),
            description: t("aboutme.certificates.javaFundamentals.description"),
            modalContent: t("aboutme.certificates.javaFundamentals.modalContent"),
            githubRepo: null,
            liveDemo: null
        },
        {
            image: images.userExperience, // Replace with the correct image name
            title: t("aboutme.certificates.userExperience.title"),
            description: t("aboutme.certificates.userExperience.description"),
            modalContent: t("aboutme.certificates.userExperience.modalContent"),
            githubRepo: null,
            liveDemo: null
        },
        {
            image: images.programmingLogic, // Replace with the correct image name
            title: t("aboutme.certificates.programmingLogic.title"),
            description: t("aboutme.certificates.programmingLogic.description"),
            modalContent: t("aboutme.certificates.programmingLogic.modalContent"),
            githubRepo: null,
            liveDemo: null
        },
        {
            image: images.fortinetFCF, // Replace with the correct image name
            title: t("aboutme.certificates.fortinetFCF.title"),
            description: t("aboutme.certificates.fortinetFCF.description"),
            modalContent: t("aboutme.certificates.fortinetFCF.modalContent"),
            githubRepo: null,
            liveDemo: null
        },
        {
            image: images.fortinetFCA,// Replace with the correct image name
            title: t("aboutme.certificates.fortinetFCA.title"),
            description: t("aboutme.certificates.fortinetFCA.description"),
            modalContent: t("aboutme.certificates.fortinetFCA.modalContent"),
            githubRepo: null,
            liveDemo: null
        },
        {

            image: images.figmaUnderstanding, // Replace with the correct image name
            title: t("aboutme.certificates.figmaUnderstanding.title"),
            description: t("aboutme.certificates.figmaUnderstanding.description"),
            modalContent: t("aboutme.certificates.figmaUnderstanding.modalContent"),
            githubRepo: null,
            liveDemo: null
        },
        {
            image: images.pythonFirstApp, // Replace with the correct image name
            title: t("aboutme.certificates.pythonFirstApp.title"),
            description: t("aboutme.certificates.pythonFirstApp.description"),
            modalContent: t("aboutme.certificates.pythonFirstApp.modalContent"),
            githubRepo: null,
            liveDemo: null
        },
        {
            image: images.uxDesignProcess, // Replace with the correct image name
            title: t("aboutme.certificates.uxDesignProcess.title"),
            description: t("aboutme.certificates.uxDesignProcess.description"),
            modalContent: t("aboutme.certificates.uxDesignProcess.modalContent"),
            githubRepo: null,
            liveDemo: null
        },
        {
            image: images.uxFoundations, // Replace with the correct image name
            title: t("aboutme.certificates.uxFoundations.title"),
            description: t("aboutme.certificates.uxFoundations.description"),
            modalContent: t("aboutme.certificates.uxFoundations.modalContent"),
            githubRepo: null,
            liveDemo: null
        }


    ];

    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 py-12 mx-6 my-2 overflow-x-hidden">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                    modalContent={card.modalContent}
                    githubRepo={card.githubRepo}
                    liveDemo={card.liveDemo}
                />
            ))}
        </div>
    );
}


