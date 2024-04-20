import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import useSearchAuthor from "../Hooks/useSearchAuthor";
import useSearchOneAuthor from "../Hooks/useSearchOneAuthor";
import "../css/Book.css"; 

const Author = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const searchResultsOneAuthor = useSearchOneAuthor(searchQuery);
  const { searchAuthors, goToNextPage, goToPreviousPage, currentPage } =
    useSearchAuthor(searchQuery);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    setIsSearchClicked(false);
  };

  const handleSearch = () => {
    setIsSearchClicked(true);
  };

  console.log(searchResultsOneAuthor);

  return (
    <div className="book-container"> 
      <div className="book-list">
        <p>Liste des auteurs :</p>
        {searchAuthors.map((author, index) => (
          <p key={`${author.name}-${index}`}>
            <Link to={`/author/${encodeURIComponent(author.name)}`}>
              {author.name}
            </Link>
          </p>
        ))}
        <div className="pagination">
          <button onClick={goToPreviousPage}>{"<<"}</button>
          <span>Page {currentPage}</span>
          <button onClick={goToNextPage}>{">>"}</button>
        </div>
      </div>

      <div className="search-container">
        <div className="search-label">Rechercher :</div>
        <div className="search-input">
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
              {searchResultsOneAuthor.map((author, index) => (
                <li key={`${author.name}-${index}`}>
                  <Link to={`/author/${encodeURIComponent(author.name)}`}>
                    {author.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Author;
