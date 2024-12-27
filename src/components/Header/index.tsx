import {Link} from "react-router";

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link><br/>
                <Link to="/projects">Projects</Link><br/>
                <Link to="/skills">Skills</Link><br/>
                <Link to="/aboutme">About-me</Link><br/>
            </nav>
        </header>


    )
}