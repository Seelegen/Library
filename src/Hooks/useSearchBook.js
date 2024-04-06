import { useState, useEffect } from "react";

const useSearchBook = (query) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (!query.trim()) {
          setSearchResults([]);
        } else {
          const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`);
          const data = await response.json();
          setSearchResults(data.docs);
        }
      } catch (error) {
        console.error("Une erreur s'est produite lors de la recherche :", error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return searchResults;
};

export default useSearchBook;
