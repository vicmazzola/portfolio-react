
export default function Footer() {
    return (
        <div>
            <footer className="footer text-lg bg-transparent text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
                </aside>

                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    {/* GitHub Link */}
                    <a href="https://github.com/vicmazzola" target="_blank" rel="noopener noreferrer"
                       aria-label="GitHub">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.123-.305-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.267 1.983-.399 3.003-.404 1.02.005 2.047.137 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.649.242 2.871.118 3.176.768.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.475 5.921.43.37.823 1.096.823 2.21v3.277c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                    {/* LinkedIn Link */}
                    <a href="https://www.linkedin.com/in/victor-mazzola-59aa291a0/" target="_blank"
                       rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-1.337-.026-3.062-1.868-3.062-1.872 0-2.158 1.46-2.158 2.969v5.697h-3v-11h2.885v1.506h.041c.402-.762 1.381-1.563 2.845-1.563 3.041 0 3.604 2.003 3.604 4.609v6.448z"/>
                        </svg>
                    </a>
                </nav>
            </footer>
        </div>
    );
}
