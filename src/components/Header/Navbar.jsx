import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
