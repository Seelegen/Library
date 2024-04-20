import { useState, useEffect } from "react";
const useSearchOneAuthor = (name) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchAuthorByName = async () => {
      try {
        if (!name.trim()) {
          setSearchResults([]);
        } else {
          const response = await fetch(`https://openlibrary.org/search/authors.json?q=${encodeURIComponent(name)}&limit=1`);
          const data = await response.json();
          setSearchResults(data.docs);
          
          console.log("Résultat de la recherche d'un seul auteur :", data.docs);
        }
      } catch (error) {
        console.error("Une erreur s'est produite lors de la recherche :", error);
      }
    };

    fetchAuthorByName();
  }, [name]);

  return searchResults;
};

export default useSearchOneAuthor;
