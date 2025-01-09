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
            certificateLink: t("aboutme.certificates.javascriptConcurrentOOP.certificateLink"),

        },
        {
            image: images.reactJSXHooks,
            title: t("aboutme.certificates.reactJSXHooks.title"),
            description: t("aboutme.certificates.reactJSXHooks.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.reactJSXHooks.modalContent"),
            certificateLink: t("aboutme.certificates.reactJSXHooks.certificateLink"),

        },
        {
            image: images.javascriptFrontEnd,
            title: t("aboutme.certificates.javascriptFrontEnd.title"),
            description: t("aboutme.certificates.javascriptFrontEnd.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.javascriptFrontEnd.modalContent"),
            certificateLink: t("aboutme.certificates.javascriptFrontEnd.certificateLink"),

        },
        {
            image: images.htmlCssFromScratch,
            title: t("aboutme.certificates.htmlCssFromScratch.title"),
            description: t("aboutme.certificates.htmlCssFromScratch.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.htmlCssFromScratch.modalContent"),
            certificateLink: t("aboutme.certificates.htmlCssFromScratch.certificateLink"),

        },
        {
            image: images.javaFundamentals,
            title: t("aboutme.certificates.javaFundamentals.title"),
            description: t("aboutme.certificates.javaFundamentals.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.javaFundamentals.modalContent"),
            certificateLink: t("aboutme.certificates.htmlCssFromScratch.certificateLink"),
        },
        {
            image: images.userExperience,
            title: t("aboutme.certificates.userExperience.title"),
            description: t("aboutme.certificates.userExperience.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.userExperience.modalContent"),
            certificateLink: t("aboutme.certificates.htmlCssFromScratch.certificateLink"),

        },
        {
            image: images.programmingLogic,
            title: t("aboutme.certificates.programmingLogic.title"),
            description: t("aboutme.certificates.programmingLogic.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.programmingLogic.modalContent"),
            certificateLink: t("aboutme.certificates.htmlCssFromScratch.certificateLink"),

        },
        {
            image: images.fortinetFCF,
            title: t("aboutme.certificates.fortinetFCF.title"),
            description: t("aboutme.certificates.fortinetFCF.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.fortinetFCF.modalContent"),
            certificateLink: t("aboutme.certificates.htmlCssFromScratch.certificateLink"),

        },
        {
            image: images.fortinetFCA,
            title: t("aboutme.certificates.fortinetFCA.title"),
            description: t("aboutme.certificates.fortinetFCA.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.fortinetFCA.modalContent"),
            certificateLink: t("aboutme.certificates.htmlCssFromScratch.certificateLink"),

        },
        {

            image: images.figmaUnderstanding,
            title: t("aboutme.certificates.figmaUnderstanding.title"),
            description: t("aboutme.certificates.figmaUnderstanding.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.figmaUnderstanding.modalContent"),
            certificateLink: t("aboutme.certificates.htmlCssFromScratch.certificateLink"),

        },
        {
            image: images.pythonFirstApp,
            title: t("aboutme.certificates.pythonFirstApp.title"),
            description: t("aboutme.certificates.pythonFirstApp.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.pythonFirstApp.modalContent"),
            certificateLink: t("aboutme.certificates.htmlCssFromScratch.certificateLink"),

        },
        {
            image: images.uxDesignProcess,
            title: t("aboutme.certificates.uxDesignProcess.title"),
            description: t("aboutme.certificates.uxDesignProcess.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.uxDesignProcess.modalContent"),
            certificateLink: t("aboutme.certificates.htmlCssFromScratch.certificateLink"),

        },
        {
            image: images.uxFoundations,
            title: t("aboutme.certificates.uxFoundations.title"),
            description: t("aboutme.certificates.uxFoundations.description"),
            buttonText: t("aboutme.certificates.button"),
            modalContent: t("aboutme.certificates.uxFoundations.modalContent"),
            certificateLink: t("aboutme.certificates.htmlCssFromScratch.certificateLink"),

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


