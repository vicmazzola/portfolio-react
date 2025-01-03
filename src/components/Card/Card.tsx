export type CardProps = {
    image: string;
    title: string;
    description: string;
    buttonText: string;
};

export default function Card(props: CardProps) {
    return (
        <div className="card bg-base-100 shadow-xl w-full sm:w-120 lg:w-220 xl:w-260">
            <figure>
                <img src={props.image} alt={`Image of ${props.title}`}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{props.buttonText}</button>
                </div>
            </div>
        </div>
    );
}
