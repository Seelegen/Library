import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <section>
        <h1 className="logo">BIBLIO</h1>
        <menu>

          <Link to="/book">
            <button>Livre</button>
          </Link>

          <Link to="/author">
            <button>Auteur</button>
          </Link>
        </menu>
      </section>
    </header>
  );
};

export default Header;
