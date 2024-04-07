import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import useSearchBook from "../Hooks/useSearchBook";

const Book = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const searchResults = useSearchBook(searchQuery);

  const handleSearch = () => {
    setIsSearchClicked(true);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    setIsSearchClicked(false);
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
            {searchResults.map((book, index) => (
              <li key={`${book.title}-${index}`}>
                <Link to={`/book/${book.title}`}>
                  {book.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Book;
