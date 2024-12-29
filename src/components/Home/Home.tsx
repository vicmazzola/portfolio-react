import styles from "./Home.module.css";


export default function Home() {
    return (
        <>

            <h1 className="text-3xl md:text-5xl text-start mx-10 mt-10 font-semibold text-white tracking-wide leading-tight">
                Hello! <br/>
            </h1>
            <h2 className={`${styles.typewriter} text-3xl md:text-5xl text-start mx-10 mb-10 font-semibold text-white tracking-wide leading-tight`}>I am
                Victor Mazzola!</h2>


        </>


    )
}

