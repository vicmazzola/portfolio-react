import styles from "./Home.module.css";
import Type from "../Type/Type.tsx";


export default function Home() {
    return (
        <div className="flex justify-center items-center h-[40vh] md:h-[55vh] lg:h-[65vh] xl:h-[70vh] bg-transparent overflow-hidden">
            <div className="card bg-transparent text-primary-content w-full max-w-4xl p-6 md:p-10 lg:p-16">
                <div className="card-body space-y-6 lg:space-y-8">
                    <h2 className="card-title text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-center leading-tight">
                        Hello there!
                    </h2>
                    <p className="text-2xl md:text-4xl lg:text-5xl text-white text-center">
                        I am Victor Mazzola!
                    </p>
                    <div className="text-2xl md:text-4xl text-white text-center">
                        <Type />
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-white opacity-40 text-lg md:text-xl px-8 py-2 hover:scale-105 transition-transform">
                            About Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

