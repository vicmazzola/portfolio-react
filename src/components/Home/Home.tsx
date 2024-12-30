import styles from "./Home.module.css";


export default function Home() {
    return (
        <>

            <h1 className="text-3xl  sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl text-start mx-10 mt-10 font-semibold text-white tracking-wide leading-tight">
                Hello there! <br/>
            </h1>
            <h2 className="text-3xl md:text-4xl text-start mx-10  font-semibold text-white tracking-wide leading-tight">I
                am
                Victor Mazzola!</h2><br/>
            <h3 className={`${styles.typewriter} text-3xl md:text-4xl text-start mx-10 mb-10 font-semibold text-white tracking-wide leading-tight`}>Software
                Developer</h3>


        </>


    )
}

