import {useState} from "react";

export type CardProps = {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    modalContent?: string;
    githubRepo?: string;
    liveDemo?: string;
};

export default function Card(props: CardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        console.log("Modal toggled! Current state:", isModalOpen);
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="card bg-base-100 shadow-xl w-full sm:w-120 lg:w-220 xl:w-260">
            <figure>
                <img src={props.image} alt={`Image of ${props.title}`}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    {/* Button to open modal */}
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            console.log("Button clicked for card:", props.title);
                            handleModalToggle();
                        }}
                    >
                        {props.buttonText}
                    </button>
                </div>
            </div>


            {/* Modal */}
            {isModalOpen && (
                <div className="modal modal-open" role="dialog" aria-labelledby="modal-title"
                     aria-describedby="modal-desc">
                    <div className="modal-box">
                        <h3 id="modal-title" className="text-lg font-bold">{props.title}</h3>
                        <p className="py-4">{props.modalContent || props.description}</p>
                        {props.githubRepo && (
                            <p className="py-2">
                                <a href={props.githubRepo} target="_blank" rel="noopener noreferrer"
                                   className="text-blue-500 underline">
                                    GitHub Repository
                                </a>
                            </p>
                        )}
                        {props.liveDemo && (
                            <p className="py-2">
                                <a href={props.liveDemo} target="_blank" rel="noopener noreferrer"
                                   className="text-blue-500 underline">
                                    Live Demo
                                </a>
                            </p>
                        )}
                        <div className="modal-actions">
                            <button className="btn" onClick={handleModalToggle}>
                                Close
                            </button>
                        </div>
                    </div>
                    <div className="modal-backdrop" onClick={handleModalToggle}></div>
                </div>
            )}
        </div>
    );
}