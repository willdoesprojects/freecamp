import "./navbar.css";

function Navbar() {
    return (
        <nav className = "navigation">
            <a href = "/" className = "site-title">Boundless Voyagers</a>
            <ul>
                <li>
                    <a href = "/map">Map</a>
                </li>
                <li>
                    <a href = "/aboutus">About us</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;