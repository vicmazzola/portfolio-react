import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
    offscreen: {
        y: 200, // Starts offscreen below
    },
    onscreen: {
        y: 0, // Moves into view
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

type CardProps = {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    animation?: Variants; // Optional custom animation
};

export default function Card({ image, title, description, buttonText, animation = cardVariants }: CardProps) {
    return (
        <motion.div
            className="card bg-base-100 shadow-xl w-96"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.2 }}
            variants={animation}
        >
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
        </motion.div>
    );
}