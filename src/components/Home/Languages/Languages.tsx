import {IconType} from "react-icons";

export class LanguageProps {
    icon: IconType
    title: string;

    constructor(icon: IconType, title: string) {
        this.icon = icon;
        this.title = title;
    }
}

export default function Languages({props}: { props: LanguageProps }) {
    const Icon = props.icon;
    return (
        <>

            <div className="card bg-black opacity-80 text-white">
                <div className="card-body flex flex-col lg:flex-row items-center">
                    <div className="text-5xl max-w-sm rounded-lg shadow-2xl"><Icon/></div>
                    <div className="text-center lg:text-left lg:ml-4">
                        <p className="text-xl rounded-lg shadow-2xl lg:order-first">{props.title}</p>
                    </div>
                </div>
            </div>

        </>
    )
}