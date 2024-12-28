import {Link} from "react-router";


export default function Header() {
    return (
        <header>
            <div className="navbar bg-accent">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/skills">Skills</Link>
                            </li>
                            <li>
                                <Link to="/aboutme">About Me</Link>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Portfolio</a>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/aboutme">About Me</Link>
                        </li>
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end">
                    <a className="btn">Contact</a>
                </div>
            </div>
        </header>
    );
}
