import {useState} from "react";
import {IconType} from "react-icons";

export type CardProps = {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    modalContent?: string;
    iconGithub?: IconType;
    githubRepo?: string;
    iconLiveDemo?: IconType;
    liveDemo?: string;
    iconCertificateLink?: IconType;
    certificateLink?: string;
    tags?: string [];

};

export default function Card(props: CardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
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

                        {/* Links Container */}

                        <div className="flex flex-wrap gap-2 py-4">
                        {/*{props.githubRepo && (*/}
                        {/*    <a*/}
                        {/*        href={props.githubRepo}*/}
                        {/*        target="_blank"*/}
                        {/*        rel="noopener noreferrer"*/}
                        {/*        className="btn btn-ghost btn-circle text-blue-500"*/}
                        {/*        aria-label="GitHub Repository"*/}
                        {/*    >*/}
                        {/*        {props.icon && <props.icon className="text-xl" aria-hidden="true" />}*/}
                        {/*    </a>*/}
                        {/*)}*/}


                        {/* GitHub Link */}
                        {props.githubRepo && (
                            <a
                                href={props.githubRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-sm flex items-center space-x-2 text-blue-500"
                            >
                                {props.iconGithub && <props.iconGithub className="text-lg" aria-hidden="true" />}
                                <span>GitHub</span>
                            </a>
                        )}

                        {/*{props.githubRepo && (*/}
                        {/*    <a*/}
                        {/*        href={props.githubRepo}*/}
                        {/*        target="_blank"*/}
                        {/*        rel="noopener noreferrer"*/}
                        {/*        className="badge badge-outline flex items-center space-x-2 text-blue-500"*/}
                        {/*    >*/}
                        {/*        {props.icon && <props.icon className="text-lg" aria-hidden="true" />}*/}
                        {/*        <span>GitHub</span>*/}
                        {/*    </a>*/}
                        {/*)}*/}


                        {/* Live Demo */}
                        {props.liveDemo && (
                            <a
                                href={props.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-sm flex items-center space-x-2 text-blue-500"
                            >
                                {props.iconLiveDemo && (
                                    <props.iconLiveDemo className="text-lg" aria-hidden="true" />
                                )}
                                <span>Live Demo</span>
                            </a>
                        )}


                        {/* Certificate Link */}
                        {props.certificateLink && (
                            <a
                                href={props.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-sm flex items-center space-x-2 text-blue-500"
                            >
                                {props.iconCertificateLink && (
                                    <props.iconCertificateLink className="text-lg" aria-hidden="true" />
                                )}
                                <span>Certificate</span>
                            </a>
                        )}
                        </div>

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