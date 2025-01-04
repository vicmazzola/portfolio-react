import {Flags} from "../../../lib/flags.ts";

export class LanguageProps {
    flag: keyof typeof Flags;
    title: string;

    constructor(flag: keyof typeof Flags, title: string) {
        this.flag = flag;
        this.title = title;
    }
}

export default function Languages({props}: { props: LanguageProps }) {
    return (
        <div className="card bg-black opacity-80 text-white">
            <div className="card-body flex flex-col lg:flex-row items-center">
                {/* Render SVG */}
                <div
                    className="text-5xl max-w-sm rounded-lg shadow-2xl"
                    dangerouslySetInnerHTML={{ __html: Flags[props.flag] }}
                ></div>
                <div className="text-center lg:text-left lg:ml-4">
                    <p className="text-xl rounded-lg shadow-2xl lg:order-first">
                        {props.title}
                    </p>
                </div>
            </div>
        </div>
    );
}