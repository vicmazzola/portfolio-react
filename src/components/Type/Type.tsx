import Typewriter from "typewriter-effect";

export default function Type() {
    return (
        <div className="">
            <Typewriter
                options={{
                    strings: [
                        "Software Developer",
                        "IT Helpdesk Intern",


                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            />
        </div>
    );
}
