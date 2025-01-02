import Typewriter from "typewriter-effect";

export default function Type({strings}: { strings: string[] }) {
    return (
        <div className="">
            <Typewriter
                options={{
                    strings: strings,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            />
        </div>
    );
}