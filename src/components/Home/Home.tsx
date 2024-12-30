import styles from "./Home.module.css";
import Type from "../Type/Type.tsx";


export default function Home() {
    return (
        <>

            <div className="card bg-transparent text-primary-content w-96">
                <div className="card-body">
                    <h2 className="card-title text-3xl  sm:text-2xl md:text-4xl lg:text-5xl xl:text-4xl text-start mx-10 mt-7 font-semibold text-white tracking-wide leading-tight">Hello
                        there!</h2>
                    <p className="text-3xl  sm:text-2xl md:text-4xl lg:text-5xl xl:text-3xl text-start mx-10 mb-7 font-semibold text-white tracking-wide leading-tight">I
                        am Victor Mazzola!</p>
                    <div className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-3xl text-start mx-10 mb-7 font-semibold text-white tracking-wide leading-tight whitespace-nowrap">
                        <Type/>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn">About-me</button>
                    </div>
                </div>
            </div>


        </>


    )
}

