import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="Header">
      <section>
        <h1 className="logo">BIBLIO</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Rechercher..."
            className="search-input"
          />
          <button id="loupe" type="submit">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarYxIAzBON-FZiNHYbvdW4HKuIYpdKGtKRA&usqp=CAU"
              alt="Loupe"
            />
          </button>
        </div>
        <menu>
          <Link to="/home">
            <button>Home</button>
          </Link>

          <Link to="/book">
            <button>Book</button>
          </Link>

          <Link to="/author">
            <button>Author </button>
          </Link>
        </menu>
      </section>
    </header>
  );
};

export default Header;
