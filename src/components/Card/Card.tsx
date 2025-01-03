export type CardProps = {
    image: string;
    title: string;
    description: string;
    buttonText: string;
};

export default function Card({ image, title, description, buttonText }: CardProps) {
    return (
        <div className="card bg-base-100 shadow-xl w-full sm:w-120 lg:w-220 xl:w-260">
            <figure>
                <img src={image} alt={`Image of ${title}`}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{buttonText}</button>
                </div>
            </div>
        </div>
    );
}
