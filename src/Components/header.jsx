import React, { useState } from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
import useSearchOneBook from "../Hooks/useSearchOneBook";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchResultsOneBook = useSearchOneBook(searchQuery);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBookClick = () => {
    setSearchQuery("");
  };

  return (
    <header className="Header">
      <div className="logo">BIBLIO</div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher un livre..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <ul className="search-results">
          {searchResultsOneBook.map((book, index) => (
            <li key={index}>
              <Link
                to={`/book/${encodeURIComponent(book.title)}`}
                onClick={handleBookClick} 
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <nav>
        <Link to="/book">
          <button>Livre</button>
        </Link>
        <Link to="/author">
          <button>Auteur</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
