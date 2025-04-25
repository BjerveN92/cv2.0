import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div><Link to="/" className="navbutton">Hem</Link></div>
            <div><Link to="/jobs" className="navbutton">Arbetslivserfarenhet</Link></div>
            <div><Link to="/education" className="navbutton">Utbildning</Link></div>
            <div><Link to="/projects" className="navbutton">Projekt</Link></div>
            <div><Link to="/contact" className="navbutton">Kontakt</Link></div>
        </nav>
    );
}