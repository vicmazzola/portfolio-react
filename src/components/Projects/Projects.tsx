import Card from "../Card/Card.tsx"
import {useTranslation} from "react-i18next";

export default function Projects() {

    const {t} = useTranslation();

    const cards = [
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card1.title"),
            description: t("projects.card1.description"),
            buttonText: t("projects.card1.button"),
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
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card4.title"),
            description: t("projects.card4.description"),
            buttonText: t("projects.card4.button"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card5.title"),
            description: t("projects.card5.description"),
            buttonText: t("projects.card5.button"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card6.title"),
            description: t("projects.card6.description"),
            buttonText: t("projects.card6.button"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card7.title"),
            description: t("projects.card7.description"),
            buttonText: t("projects.card7.button"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card8.title"),
            description: t("projects.card8.description"),
            buttonText: t("projects.card8.button"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card9.title"),
            description: t("projects.card9.description"),
            buttonText: t("projects.card9.button"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card10.title"),
            description: t("projects.card10.description"),
            buttonText: t("projects.card10.button"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card11.title"),
            description: t("projects.card11.description"),
            buttonText: t("projects.card11.button"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card12.title"),
            description: t("projects.card12.description"),
            buttonText: t("projects.card12.button"),
        },

    ];

    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-3 gap-8 py-12 mx-6 my-2 overflow-x-hidden">
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
