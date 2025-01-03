import {IconType} from "react-icons";

export class SkillProps {
    icon: IconType
    title: string;

    constructor(icon: IconType, title: string) {
        this.icon = icon;
        this.title = title;
    }
}

export default function Skill({props}: { props: SkillProps }) {
    const Icon = props.icon;
    return (
        <>

            <div className="hero bg-black opacity-80 text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-5xl max-w-sm rounded-lg shadow-2xl"><Icon/></div>
                    <div>
                        <p className="font-semibold">{props.title}</p>
                    </div>
                </div>
            </div>

        </>
    )
}