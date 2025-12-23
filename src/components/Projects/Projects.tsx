import Card, {CardProps} from "../Card/Card.tsx"
import {useTranslation} from "react-i18next";
import {useState} from "react";
import images from "../Card/CardImages.tsx"
import Dropdown from "../Dropdown/Dropdown.tsx";
import {FaGithub} from "react-icons/fa";
import {FiExternalLink} from "react-icons/fi";
import {Link} from "react-router";


export default function Projects() {

    const {t} = useTranslation();
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const handleFilterChange = (tag: string | null) => {
        setSelectedTag(tag);
    };

    const cards: CardProps[] = [
        {
            image: images.springContacts,
            title: t("projects.spring-contacts.title"),
            description: t("projects.spring-contacts.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.spring-contacts.modalContent"),
            iconGithub: FaGithub,
            githubRepo: t("projects.spring-contacts.githubRepo"),
            tags: [
                "back-end", "java", "spring-boot", "spring-security", "jwt",
                "jpa", "oracle", "flyway", "rest-api"
            ],
        },
        {
            image: images.springMicroservices,
            title: t("projects.spring-microservices.title"),
            description: t("projects.spring-microservices.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.spring-microservices.modalContent"),
            iconGithub: FaGithub,
            githubRepo: t("projects.spring-microservices.githubRepo"),
            tags: [
                "back-end", "java", "spring-boot", "microservices",
                "jpa", "hibernate", "mysql", "flyway", "eureka", "rest-api"
            ],
        },
        {
            image: images.springEcowatt,
            title: t("projects.spring-ecowatt.title"),
            description: t("projects.spring-ecowatt.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.spring-ecowatt.modalContent"),
            iconGithub: FaGithub,
            githubRepo: t("projects.spring-ecowatt.githubRepo"),
            tags: ["back-end", "java", "spring-boot", "spring-security"
                , "jpa", "oracle", "flyway", "docker", "rest-api"],
        },
        {
            image: images.mernTalk,
            title: t("projects.mern-talk.title"),
            description: t("projects.mern-talk.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.mern-talk.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo: FiExternalLink,
            githubRepo: t("projects.mern-talk.githubRepo"),
            liveDemo: t("projects.mern-talk.liveDemo"),
            tags: ["react", "javascript", "tailwind", "html", "css"],
        },
        {
            image: images.portfolio,
            title: t("projects.portfolio.title"),
            description: t("projects.portfolio.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.portfolio.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo: FiExternalLink,
            githubRepo: t("projects.portfolio.githubRepo"),
            liveDemo: t("projects.portfolio.liveDemo"),
            tags: ["front-end", "react", "typescript", "tailwind", "html", "css"],
        },
        {
            image: images.reactHangman,
            title: t("projects.react-hangman.title"),
            description: t("projects.react-hangman.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.react-hangman.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo: FiExternalLink,
            githubRepo: t("projects.react-hangman.githubRepo"),
            liveDemo: t("projects.react-hangman.liveDemo"),
            tags: ["front-end", "react", "typescript", "pwa", "html", "css"],
        },
        {
            image: images.weatherApp,
            title: t("projects.weather.title"),
            description: t("projects.weather.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.weather.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo: FiExternalLink,
            githubRepo: t("projects.weather.githubRepo"),
            liveDemo: t("projects.weather.liveDemo"),
            tags: ["front-end", "react", "javascript", "pwa", "html", "css"],
        },
        {
            image: images.calculator,
            title: t("projects.calculator.title"),
            description: t("projects.calculator.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.calculator.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo: FiExternalLink,
            githubRepo: t("projects.calculator.githubRepo"),
            liveDemo: t("projects.calculator.liveDemo"),
            tags: ["front-end", "react", "javascript", "pwa", "html", "css"],
        },
        {
            image: images.shoppingList,
            title: t("projects.shopping-list.title"),
            description: t("projects.shopping-list.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.shopping-list.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo: FiExternalLink,
            githubRepo: t("projects.shopping-list.githubRepo"),
            liveDemo: t("projects.shopping-list.liveDemo"),
            tags: ["front-end", "vanilla-js", "bootstrap", "pwa", "javascript", "html", "css"],
        },
        {
            image: images.teamFlow,
            title: t("projects.teamflow.title"),
            description: t("projects.teamflow.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.teamflow.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo: FiExternalLink,
            githubRepo: t("projects.teamflow.githubRepo"),
            liveDemo: t("projects.teamflow.liveDemo"),
            tags: ["front-end", "react", "javascript", "html", "css"],
        },
        {
            image: images.devDragons,
            title: t("projects.dev-dragons.title"),
            description: t("projects.dev-dragons.description"),
            buttonText: t("projects.button"),
            modalContent: t("projects.dev-dragons.modalContent"),
            iconGithub: FaGithub,
            iconLiveDemo: FiExternalLink,
            githubRepo: t("projects.dev-dragons.githubRepo"),
            liveDemo: t("projects.dev-dragons.liveDemo"),
            tags: ["front-end", "vanilla-js", "javascript", "html", "css"],

        },

    ];

    const filteredCards = selectedTag
        ? cards.filter((card) => card.tags?.includes(selectedTag))
        : cards;

    const dropdownOptions = [
        {label: "All", value: null},
        {label: "Front-End", value: "front-end"},
        {label: "Vanilla JS", value: "vanilla-js"},
        {label: "React", value: "react"},
        {label: "Bootstrap", value: "bootstrap"},
        {label: "Tailwind", value: "tailwind"},
        {label: "PWA", value: "pwa"},
        {label: "TypeScript", value: "typescript"},
        {label: "JavaScript", value: "javascript"},
        {label: "CSS", value: "css"},
        {label: "HTML", value: "html"},

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



