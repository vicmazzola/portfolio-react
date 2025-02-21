import Card, {CardProps} from "../Card/Card.tsx"
import {useTranslation} from "react-i18next";
import {useState} from "react";
import images from "../Card/CardImages.tsx"
import Dropdown from "../Dropdown/Dropdown.tsx";
import {FaGithub} from "react-icons/fa";
import {FiExternalLink } from "react-icons/fi";
import {Link} from "react-router";




export default function Projects() {

    const {t} = useTranslation();
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const handleFilterChange = (tag: string | null) => {
        setSelectedTag(tag);
    };

    const cards: CardProps[] = [
        {
            image: images.mernTalk,
            title: t("projects.mern-talk.title"),
            description: t("projects.mern-talk.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.mern-talk.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.mern-talk.githubRepo"),
            liveDemo: t("projects.mern-talk.liveDemo"),
            tags: ["react","javascript","tailwind","html", "css"],
        },
        {
            image: images.portfolio,
            title: t("projects.portfolio.title"),
            description: t("projects.portfolio.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.portfolio.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.portfolio.githubRepo"),
            liveDemo: t("projects.portfolio.liveDemo"),
            tags: ["front-end", "react","typescript","tailwind","html", "css"],
        },
        {
            image: images.reactHangman,
            title: t("projects.react-hangman.title"),
            description: t("projects.react-hangman.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.react-hangman.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.react-hangman.githubRepo"),
            liveDemo: t("projects.react-hangman.liveDemo"),
            tags: ["front-end", "react","typescript","pwa","html", "css"],
        },
        {
            image: images.weatherApp,
            title: t("projects.weather.title"),
            description: t("projects.weather.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.weather.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.weather.githubRepo"),
            liveDemo: t("projects.weather.liveDemo"),
            tags: ["front-end", "react","javascript","pwa","html", "css"],
        },
        {
            image: images.calculator,
            title: t("projects.calculator.title"),
            description: t("projects.calculator.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.calculator.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.calculator.githubRepo"),
            liveDemo: t("projects.calculator.liveDemo"),
            tags: ["front-end", "react","javascript","pwa","html", "css"],
        },
        {
            image: images.shoppingList,
            title: t("projects.shopping-list.title"),
            description: t("projects.shopping-list.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.shopping-list.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.shopping-list.githubRepo"),
            liveDemo: t("projects.shopping-list.liveDemo"),
            tags: ["front-end", "vanilla-js","bootstrap","pwa", "javascript", "html", "css"],
        },
        {
            image: images.teamFlow,
            title: t("projects.teamflow.title"),
            description: t("projects.teamflow.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.teamflow.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.teamflow.githubRepo"),
            liveDemo: t("projects.teamflow.liveDemo"),
            tags: ["front-end", "react","javascript", "html", "css"],
        },
        {
            image: images.codeConnect,
            title: t("projects.codeconnect.title"),
            description: t("projects.codeconnect.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.codeconnect.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.codeconnect.githubRepo"),
            liveDemo: t("projects.codeconnect.liveDemo"),
            tags: ["front-end", "react","javascript", "html", "css"],
        },
        {
            image: images.codeConnectLogin,
            title: t("projects.codeconnect-login.title"),
            description: t("projects.codeconnect-login.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.codeconnect-login.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.codeconnect-login.githubRepo"),
            liveDemo: t("projects.codeconnect-login.liveDemo"),
            tags: ["front-end", "react","javascript", "html", "css"],
        },
        {
            image: images.codeConnectPost,
            title: t("projects.codeconnect-post.title"),
            description: t("projects.codeconnect-post.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.codeconnect-post.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.codeconnect-post.githubRepo"),
            liveDemo: t("projects.codeconnect-post.liveDemo"),
            tags: ["front-end", "react","javascript", "html", "css"],
        },
        {
            image: images.devDragons,
            title: t("projects.dev-dragons.title"),
            description: t("projects.dev-dragons.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.dev-dragons.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.dev-dragons.githubRepo"),
            liveDemo: t("projects.dev-dragons.liveDemo"),
            tags: ["front-end", "vanilla-js","javascript", "html", "css"],

        },
        {
            image: images.fokus,
            title: t("projects.fokus.title"),
            description: t("projects.fokus.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.fokus.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.fokus.githubRepo"),
            liveDemo: t("projects.fokus.liveDemo"),
            tags: ["front-end", "vanilla-js","javascript", "html", "css"],
        },
        {
            image: images.iFood,
            title: t("projects.ifood.title"),
            description: t("projects.ifood.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.ifood.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.ifood.githubRepo"),
            liveDemo: t("projects.ifood.liveDemo"),
            tags: ["front-end", "vanilla-js","javascript", "html", "css"],
        },
        {
            image: images.aboutGames,
            title: t("projects.about-games.title"),
            description: t("projects.about-games.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.about-games.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.about-games.githubRepo"),
            liveDemo: t("projects.about-games.liveDemo"),
            tags: ["front-end", "html", "css", "bootstrap"]

        },
        {
            image: images.mazzolaPlay,
            title: t("projects.mazzola-play.title"),
            description: t("projects.mazzola-play.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.mazzola-play.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.mazzola-play.githubRepo"),
            liveDemo: t("projects.mazzola-play.liveDemo"),
            tags: ["front-end", "html", "css", "bootstrap"]
        },
        {
            image: images.fintech,
            title: t("projects.fintech.title"),
            description: t("projects.fintech.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.fintech.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.fintech.githubRepo"),
            liveDemo: t("projects.fintech.liveDemo"),
            tags: ["front-end", "html", "css", "bootstrap"]
        },
        {
            image: images.aluraBooks,
            title: t("projects.alurabooks.title"),
            description: t("projects.alurabooks.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.alurabooks.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.alurabooks.githubRepo"),
            liveDemo: t("projects.alurabooks.liveDemo"),
            tags: ["front-end", "html", "css", "vanilla-js","javascript",]
        },
        {
            image: images.guess,
            title: t("projects.guess.title"),
            description: t("projects.guess.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.guess.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo:FiExternalLink,
            githubRepo: t("projects.guess.githubRepo"),
            liveDemo: t("projects.guess.liveDemo"),
            tags: ["front-end", "html", "css", "vanilla-js","javascript","bootstrap"]

        },
    ];

    const filteredCards = selectedTag
        ? cards.filter((card) => card.tags?.includes(selectedTag))
        : cards;

    const dropdownOptions = [
        { label: "All", value: null },
        { label: "Front-End", value: "front-end" },
        { label: "Vanilla JS", value: "vanilla-js" },
        { label: "React", value: "react" },
        { label: "Bootstrap", value: "bootstrap" },
        { label: "Tailwind", value: "tailwind" },
        { label: "PWA", value: "pwa" },
        { label: "TypeScript", value: "typescript" },
        { label: "JavaScript", value: "javascript" },
        { label: "CSS", value: "css" },
        { label: "HTML", value: "html" },

    ];


    return (
        <>

            {/* Filter Dropdown */}
            <div className=" top-0 bg-transparent z-10 flex justify-start py-4 px-6 hidden">
                <Dropdown options={dropdownOptions} onSelect={handleFilterChange}/>
            </div>

            {/* Filtered Projects */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 py-12 mx-6 my-2 overflow-x-hidden"
            >
                {filteredCards.map((card, index) => (
                    <Card
                        key={index}
                        {...card}
                    />
                ))}
            </div>

            <div className="join flex justify-center py-6">
                <Link to="/" className="join-item btn bg-black opacity-80 text-white">«</Link>
                <button className="join-item btn bg-black opacity-80 text-white">{t("pagination.projects")}</button>
                <Link to="/aboutme" className="join-item btn bg-black opacity-80 text-white">»</Link>
            </div>

        </>
    );
}



