import Card from "../Card/Card.tsx"
import { useTranslation } from "react-i18next";

export default function Projects() {

    const { t } = useTranslation();

    const cards = [
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card1.title"), // Translated title
            description: t("projects.card1.description"), // Translated description
            buttonText: t("projects.card1.button"), // Translated button text
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card2.title"),
            description: t("projects.card2.description"),
            buttonText: t("projects.card2.button"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card3.title"),
            description: t("projects.card3.description"),
            buttonText: t("projects.card3.button"),
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 mx-6 my-2">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                />
            ))}
        </div>
    );
}
