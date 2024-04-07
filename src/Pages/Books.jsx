import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import useSearchOneBook from "../Hooks/useSearchOneBook";
import useSearchBook from "../Hooks/useSearchBook";

const Book = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const searchResultsOneBook = useSearchOneBook(searchQuery);
  const { searchBooks, goToNextPage, goToPreviousPage, currentPage } =
    useSearchBook(searchQuery);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    setIsSearchClicked(false);
  };

  const handleSearch = () => {
    setIsSearchClicked(true);
  };

  return (
    <div>
      <h2>Page Books</h2>
      <p>Découvrez nos derniers livres ici.</p>

      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      {isSearchClicked && (
        <div>
          <p>Résultats de la recherche :</p>
          <ul>
            {searchResultsOneBook.map((book, index) => (
              <li key={`${book.title}-${index}`}>
                <Link to={`/book/${book.title}`}>{book.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <p>Liste des livres :</p>

        {searchBooks.map((book, index) => (
          <p key={`${book.title}-${index}`}>
            <span>{book.title}</span>
          </p>
        ))}
      </div>

      <div>
        <button onClick={goToPreviousPage}>{"<<"}</button>
        <span>Page {currentPage}</span>
        <button onClick={goToNextPage}>{">>"}</button>
      </div>
    </div>
  );
};

export default Book;
