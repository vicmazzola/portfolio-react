import Card, {CardProps} from "../Card/Card.tsx"
import {useTranslation} from "react-i18next";
import images from "../Card/CardImages.tsx"


export default function Certificates() {

    const {t} = useTranslation();

    const cards: CardProps[] = [
        {
            image: images.portfolio,
            title: t("aboutme.certificates.alura.title"),
            description: t("aboutme.certificates.alura.description"),
            modalContent: t("aboutme.certificates.alura.modalContent"),
            githubRepo: t("aboutme.certificates.alura.githubRepo"),
            liveDemo: t("aboutme.certificates.alura.liveDemo")
        },
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


