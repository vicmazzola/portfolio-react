import {Link} from "react-router";
import {useState} from "react";


export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggle = () => {
        setIsDarkMode((prev) => !prev);
        // Optionally, you can add logic here to change a global theme (e.g., Tailwind's `data-theme` attribute)
        document.documentElement.setAttribute("data-theme", isDarkMode ? "light" : "dark");
    };
    return (
        <header>
            <div className="navbar bg-transparent text-white">
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
                            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
                    <Link to="/">
                        <a className="btn btn-ghost text-xl sm:text-1xl md:text-3xl lg:text-4xl text-start ml- font-semibold text-white tracking-wide leading-tight">Mazz Code</a>
                    </Link>


                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/"
                                  className="hover:text-white focus:text-white active:text-white"
                            >Home</Link>
                        </li>
                        <li>
                            <Link to="/projects"
                                  className="hover:text-white focus:text-white active:text-white"
                            >Projects</Link>
                        </li>
                        <li>
                            <Link to="/skills"
                                  className="hover:text-white focus:text-white active:text-white"
                            >Skills</Link>
                        </li>
                        <li>
                            <Link to="/aboutme"
                                  className="hover:text-white focus:text-white active:text-white"
                            >About Me</Link>
                        </li>
                    </ul>
                </div>



                {/* Navbar End */}
                <div className="navbar-end">
                    <label className="grid cursor-pointer place-items-center">
                        <input
                            type="checkbox"
                            value="synthwave"
                            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                        />
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
            </div>
        </header>
    );
}
