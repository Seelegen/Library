import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useSearchBook from "../Hooks/useSearchBook";

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const searchResults = useSearchBook(searchQuery);

  const handleSearch = async () => {
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
            {searchResults.map((result, index) => (
              <li key={index}>{result.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Books;
