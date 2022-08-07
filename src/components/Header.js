import Logo from "../IMG/logo.ad6c786b.svg";
import "../CSS/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="leftpart">
        <Link to="/">
          <img src={Logo} alt="logoMarvel" />
        </Link>
      </div>
      <div className="rightpart">
        <button>S'inscrire</button>
        <button>Se connecter</button>
      </div>
    </header>
  );
};

export default Header;
