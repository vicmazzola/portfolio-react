import { useTranslation } from "react-i18next";

const Timeline: React.FC = () => {
    const { t } = useTranslation();

    const timelineData = [
        {
            company: t("aboutme.job.goldnet.company"),
            location: t("aboutme.job.goldnet.location"),
            title: t("aboutme.job.goldnet.title"),
            date: t("aboutme.job.goldnet.date"),
            description: t("aboutme.job.goldnet.description"),
        },
        {
            company: t("aboutme.school.fiap.company"),
            location: t("aboutme.school.fiap.location"),
            title: t("aboutme.school.fiap.title"),
            date: t("aboutme.school.fiap.date"),
            description: t("aboutme.school.fiap.description"),
        },
        {
            company: t("aboutme.job.evolution.company"),
            location: t("aboutme.job.evolution.location"),
            title: t("aboutme.job.evolution.title"),
            date: t("aboutme.job.evolution.date"),
            description: t("aboutme.job.evolution.description"),
        },
        {
            company: t("aboutme.job.vilaromana.company"),
            location: t("aboutme.job.vilaromana.location"),
            title: t("aboutme.job.vilaromana.title"),
            date: t("aboutme.job.vilaromana.date"),
            description: t("aboutme.job.vilaromana.description"),
        },
        {
            company: t("aboutme.job.ambev.company"),
            location: t("aboutme.job.ambev.location"),
            title: t("aboutme.job.ambev.title"),
            date: t("aboutme.job.ambev.date"),
            description: t("aboutme.job.ambev.description"),
        },
        {
            company: t("aboutme.job.adoniroladeira.company"),
            location: t("aboutme.job.adoniroladeira.location"),
            title: t("aboutme.job.adoniroladeira.title"),
            date: t("aboutme.job.adoniroladeira.date"),
            description: t("aboutme.job.adoniroladeira.description"),
        },
    ];

    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-white px-8">

            {timelineData.map((item, index) => (
                <li key={index}>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className={`timeline-${index % 2 === 0 ? "start" : "end"} mb-10 bg-black opacity-70 rounded-lg p-4`}>
                        <div className="font-semibold text-xl">{item.company}</div>
                        <div className="italic">{item.location}</div>
                        <div className="font-semibold">{item.title}</div>
                        <time className="font-mono italic block">{item.date}</time>
                        <p>{item.description}</p>
                    </div>
                    <hr />
                </li>
            ))}
        </ul>
    );
};

export default Timeline;
