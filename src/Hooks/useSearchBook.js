import { useState, useEffect } from "react";

const useSearchBook = (query) => {
  const [SearchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    const fetchSearchBooks = async () => {
      try {
        if (!query.trim()) {
          setSearchBooks([]);
        } else {
          const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query).replace(/%20/g, '+')}`);
          const data = await response.json();
          setSearchBooks(data.docs);
        }
      } catch (error) {
        console.error("Une erreur s'est produite lors de la recherche :", error);
      }
    };

    fetchSearchBooks();
  }, [query]);

  return SearchBooks;
};

export default useSearchBook;
