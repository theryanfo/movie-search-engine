import { Link } from "react-router-dom";
import '../css/NavBar.css'


function NavBar() {
    return (
        <nav className="navbar">
            <div>
                <Link to="/" className="navbar-brand">Movie Search</Link>
            </div>
            <div>
                <Link to="/" className="nav-link">Home</Link>
            </div>
            <div>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    );
}

export default NavBar;