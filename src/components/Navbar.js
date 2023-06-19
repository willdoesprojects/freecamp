import "./navbar.css";

function Navbar() {
    return (
        <nav className = "nav">
            <div className = "entirenav">
            <a href = "/" className = "site-title">Boundless Voyagers</a>

            <div className = "signin">
                <a href = "#">Login</a>
                <a href = "#">Sign Up</a>
            </div>

            <div className = "rest">
            <ul>
                <li>
                    <a href = "#">Magazine</a>
                </li>
                <li>
                    <a href = "/map">Map</a>
                </li>
                <li>
                    <a href = "/aboutus">About us</a>
                </li>
            </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;