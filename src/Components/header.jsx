import React, { useState } from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
import useSearchBook from "../Hooks/useSearchBook";

const Header = () => {
  const [query, setQuery] = useState('');
  const { books, isLoading } = useSearchBook(query);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <header className="Header">
      <section>
        <h1 className="logo">BIBLIO</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Rechercher..."
            className="search-input"
            value={query}
            onChange={handleInputChange}
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
            <button>Author</button>
          </Link>
        </menu>
      </section>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Number of books found: {books.length}</p>
          <ul>
            {books.map((book, index) => (
              <li key={index}>
                <Link to={`/book/${index}`}>{book.title}</Link>
              </li>
            ))}
          </ul>
          {books.length > 0 && <p>Author Name: {books[0].author_name}</p>}
        </div>
      )}
    </header>
  );
};

export default Header;
