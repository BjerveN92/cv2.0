import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <div><Link to="/">Hem</Link></div>
            <div><Link to="/jobs">Arbetslivserfarenhet</Link></div>
            <div><Link to="/education">Utbildning</Link></div>
            <div><Link to="/projects">Projekt</Link></div>
            <div><Link to="/contact">Kontakt</Link></div>
        </nav>
    );
}