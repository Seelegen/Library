import React from "react";
import "../css/header.css";
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
          <button>Home</button>
          <button>Book</button>
          <button>Author</button>
        </menu>
      </section>
    </header>
  );
};

export default Header;
