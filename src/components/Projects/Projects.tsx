import Card, {CardProps} from "../Card/Card.tsx"
import {useTranslation} from "react-i18next";


export default function Projects() {

    const {t} = useTranslation();


    const cards: CardProps[] = [
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card1.title"),
            description: t("projects.card1.description"),
            buttonText: t("projects.card1.button"),
            modalContent: t("projects.card1.modalContent"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card2.title"),
            description: t("projects.card2.description"),
            buttonText: t("projects.card2.button"),
            modalContent: t("projects.card2.modalContent"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card3.title"),
            description: t("projects.card3.description"),
            buttonText: t("projects.card3.button"),
            modalContent: t("projects.card3.modalContent"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card4.title"),
            description: t("projects.card4.description"),
            buttonText: t("projects.card4.button"),
            modalContent: t("projects.card4.modalContent"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card5.title"),
            description: t("projects.card5.description"),
            buttonText: t("projects.card5.button"),
            modalContent: t("projects.card5.modalContent"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card6.title"),
            description: t("projects.card6.description"),
            buttonText: t("projects.card6.button"),
            modalContent: t("projects.card6.modalContent"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card7.title"),
            description: t("projects.card7.description"),
            buttonText: t("projects.card7.button"),
            modalContent: t("projects.card7.modalContent"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card8.title"),
            description: t("projects.card8.description"),
            buttonText: t("projects.card8.button"),
            modalContent: t("projects.card8.modalContent"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card9.title"),
            description: t("projects.card9.description"),
            buttonText: t("projects.card9.button"),
            modalContent: t("projects.card9.modalContent"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card10.title"),
            description: t("projects.card10.description"),
            buttonText: t("projects.card10.button"),
            modalContent: t("projects.card10.modalContent"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card11.title"),
            description: t("projects.card11.description"),
            buttonText: t("projects.card11.button"),
            modalContent: t("projects.card11.modalContent"),
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.card12.title"),
            description: t("projects.card12.description"),
            buttonText: t("projects.card12.button"),
            modalContent: t("projects.card12.modalContent"),
        },
    ];



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-3 gap-8 py-12 mx-6 my-2 overflow-x-hidden">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                    modalContent={card.modalContent}
                />
            ))}
        </div>
    );
}