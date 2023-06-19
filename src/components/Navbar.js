import "./navbar.css";
import { useState, useEffect } from "react";
import logoImage from "../logo.png";

function Navbar() {
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
      }, []);

    return (
        <nav className = "nav">

            <div className = "rest">
                <a href = "/" className = "site-title">
                    <img src={logoImage} alt = "logo"></img>
                </a>
            <ul>
                <li className={`${currentPath === '/magazine' ? 'active' : ''}`}>
                    <a href = "/magazine">Magazine</a>
                </li>
                <li className={`${currentPath === '/map' ? 'active' : ''}`}>
                    <a href = "/map">Map</a>
                </li>
                <li className={`${currentPath === '/aboutus' ? 'active' : ''}`}>
                    <a href = "/aboutus">About us</a>
                </li>
            </ul>
            </div>

            <div className = "signin">
                <ul>
                    <li>
                        <a href = "#">Login</a>
                    </li>
                    <li>
                        <a href = "/signup">Sign Up</a>
                    </li>
                </ul>
            </div>

        </nav>
    );

    }

export default Navbar;