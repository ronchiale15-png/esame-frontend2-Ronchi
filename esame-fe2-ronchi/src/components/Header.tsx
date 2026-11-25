import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
        <div className="header__brand">Movie App</div>
      </div>
      <nav className="header__nav">
        <Link to="/">Home / Elenco</Link>
      </nav>
    </header>
  );
};

export default Header;