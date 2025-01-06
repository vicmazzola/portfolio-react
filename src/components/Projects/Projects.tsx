import Card, {CardProps} from "../Card/Card.tsx"
import {useTranslation} from "react-i18next";
import calculator from "../../assets/calculator.png";
import portfolio from "../../assets/portfolio.png"


export default function Projects() {

    const {t} = useTranslation();


    const cards: CardProps[] = [
        {
            image: portfolio,
            title: t("projects.portfolio.title"),
            description: t("projects.portfolio.description"),
            buttonText: t("projects.portfolio.button"),
            modalContent: t("projects.portfolio.modalContent"),
            githubRepo: t("projects.portfolio.githubRepo"),
            liveDemo: t("projects.portfolio.liveDemo")
        },
        {
            image: calculator,
            title: t("projects.calculator.title"),
            description: t("projects.calculator.description"),
            buttonText: t("projects.calculator.button"),
            modalContent: t("projects.calculator.modalContent"),
            githubRepo: t("projects.calculator.githubRepo"),
            liveDemo: t("projects.calculator.liveDemo")
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.shopping-list.title"),
            description: t("projects.shopping-list.description"),
            buttonText: t("projects.shopping-list.button"),
            modalContent: t("projects.shopping-list.modalContent"),
            githubRepo: t("projects.shopping-list.githubRepo"),
            liveDemo: t("projects.shopping-list.liveDemo")
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.teamflow.title"),
            description: t("projects.teamflow.description"),
            buttonText: t("projects.teamflow.button"),
            modalContent: t("projects.teamflow.modalContent"),
            githubRepo: t("projects.teamflow.githubRepo"),
            liveDemo: t("projects.teamflow.liveDemo")
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.codeconnect.title"),
            description: t("projects.codeconnect.description"),
            buttonText: t("projects.codeconnect.button"),
            modalContent: t("projects.codeconnect.modalContent"),
            githubRepo: t("projects.codeconnect.githubRepo"),
            liveDemo: t("projects.codeconnect.liveDemo")
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.codeconnect-login.title"),
            description: t("projects.codeconnect-login.description"),
            buttonText: t("projects.codeconnect-login.button"),
            modalContent: t("projects.codeconnect-login.modalContent"),
            githubRepo: t("projects.codeconnect-login.githubRepo"),
            liveDemo: t("projects.codeconnect-login.liveDemo")
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.codeconnect-post.title"),
            description: t("projects.codeconnect-post.description"),
            buttonText: t("projects.codeconnect-post.button"),
            modalContent: t("projects.codeconnect-post.modalContent"),
            githubRepo: t("projects.codeconnect-post.githubRepo"),
            liveDemo: t("projects.codeconnect-post.liveDemo")
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.dev-dragons.title"),
            description: t("projects.dev-dragons.description"),
            buttonText: t("projects.dev-dragons.button"),
            modalContent: t("projects.dev-dragons.modalContent"),
            githubRepo: t("projects.dev-dragons.githubRepo"),
            liveDemo: t("projects.dev-dragons.liveDemo")
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.fokus.title"),
            description: t("projects.fokus.description"),
            buttonText: t("projects.fokus.button"),
            modalContent: t("projects.fokus.modalContent"),
            githubRepo: t("projects.fokus.githubRepo"),
            liveDemo: t("projects.fokus.liveDemo")
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.ifood.title"),
            description: t("projects.ifood.description"),
            buttonText: t("projects.ifood.button"),
            modalContent: t("projects.ifood.modalContent"),
            githubRepo: t("projects.ifood.githubRepo"),
            liveDemo: t("projects.ifood.liveDemo")
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.about-games.title"),
            description: t("projects.about-games.description"),
            buttonText: t("projects.about-games.button"),
            modalContent: t("projects.about-games.modalContent"),
            githubRepo: t("projects.about-games.githubRepo"),
            liveDemo: t("projects.about-games.liveDemo")
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.mazzola-play.title"),
            description: t("projects.mazzola-play.description"),
            buttonText: t("projects.mazzola-play.button"),
            modalContent: t("projects.mazzola-play.modalContent"),
            githubRepo: t("projects.mazzola-play.githubRepo"),
            liveDemo: t("projects.mazzola-play.liveDemo")
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.fintech.title"),
            description: t("projects.fintech.description"),
            buttonText: t("projects.fintech.button"),
            modalContent: t("projects.fintech.modalContent"),
            githubRepo: t("projects.fintech.githubRepo"),
            liveDemo: t("projects.fintech.liveDemo")
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.alurabooks.title"),
            description: t("projects.alurabooks.description"),
            buttonText: t("projects.alurabooks.button"),
            modalContent: t("projects.alurabooks.modalContent"),
            githubRepo: t("projects.alurabooks.githubRepo"),
            liveDemo: t("projects.alurabooks.liveDemo")
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            title: t("projects.guess.title"),
            description: t("projects.guess.description"),
            buttonText: t("projects.guess.button"),
            modalContent: t("projects.guess.modalContent"),
            githubRepo: t("projects.guess.githubRepo"),
            liveDemo: t("projects.guess.liveDemo")
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
                    githubRepo={card.githubRepo}
                    liveDemo={card.liveDemo}
                />
            ))}
        </div>
    );
}