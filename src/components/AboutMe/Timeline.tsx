interface TimelineItem {
    year: string;
    title: string;
    description: string;
}

const timelineData: TimelineItem[] = [
    {
        year: "2015",
        title: "Apple Watch",
        description:
            "The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking and health-oriented capabilities.",
    },
    {
        year: "2007",
        title: "iPhone",
        description:
            "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system.",
    },
    {
        year: "2001",
        title: "iPod",
        description:
            "The iPod is a discontinued series of portable media players designed and marketed by Apple Inc.",
    },
    {
        year: "1998",
        title: "iMac",
        description:
            "iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc.",
    },
    {
        year: "1984",
        title: "First Macintosh computer",
        description:
            "The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer.",
    },
];


const Timeline: React.FC = () => {
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-white">
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
                    <div className={`timeline-${index % 2 === 0 ? "start" : "end"} mb-10`}>
                        <time className="font-mono italic" dateTime={item.year}>
                            {item.year}
                        </time>
                        <div className="text-lg font-black">{item.title}</div>
                        <p>{item.description}</p>
                    </div>
                    <hr />
                </li>
            ))}
        </ul>
    );
};

export default Timeline;
