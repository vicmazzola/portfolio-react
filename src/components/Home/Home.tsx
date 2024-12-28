import { motion, Variants } from "framer-motion";

export default function Home() {
    const cardVariants: Variants = {
        offscreen: {
            y: 300, // Starts offscreen below
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

    return (
        <div className="flex flex-col items-center gap-8 py-12">
            {/* First DaisyUI Card with Animation */}
            <motion.div
                className="card bg-base-100 shadow-xl w-96"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.2}} // Trigger when 20% of card is visible
                variants={cardVariants}
            >
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes, whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </motion.div>

            {/* Second DaisyUI Card with Animation */}
            <motion.div
                className="card bg-base-100 shadow-xl w-96"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.2 }} // Trigger when 20% of card is visible
                variants={cardVariants}
            >
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">More Shoes!</h2>
                    <p>Find your perfect pair in our exclusive collection.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </motion.div>
            {/* Third DaisyUI Card with Animation */}
            <motion.div
                className="card bg-base-100 shadow-xl w-96"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.2 }} // Trigger when 20% of card is visible
                variants={cardVariants}
            >
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">More Shoes!</h2>
                    <p>Find your perfect pair in our exclusive collection.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
