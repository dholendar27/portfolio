import { Fragment, useState } from "react";
import { ReactComponent as DownloadIcon } from "../assets/download.svg";
import "./NavBar.css"

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Step 2: Toggle function to open/close the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Fragment>
            <header>
                <nav className="nav-bar">
                    <div className="logo">
                        <h1>Dholendar Reddy</h1>
                    </div>

                    <div className="nav-menu">
                        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                            <li className="nav-items"><a href="#">About Me</a></li>
                            <li className="nav-items"><a href="#skills">Skills</a></li>
                            <li className="nav-items"><a href="#experience">Experience</a></li>
                            <li className="nav-items"><a href="#">Project</a></li>
                        </ul>
                    </div>

                    <div className="Resume">
                        <button>Resume <DownloadIcon /></button>
                    </div>

                    {/* Hamburger Icon */}
                    <div className="hamburger" onClick={toggleMenu}>
                        <span className={`bar ${isMenuOpen ? 'close' : ''}`}></span>
                        <span className={`bar ${isMenuOpen ? 'close' : ''}`}></span>
                        <span className={`bar ${isMenuOpen ? 'close' : ''}`}></span>
                    </div>
                </nav>
            </header>
        </Fragment>
    )
}