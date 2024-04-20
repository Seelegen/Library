import { useState, useEffect } from "react";
const useSearchOneBook = (query) => {
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    const fetchSearchBooks = async () => {
      try {
        if (!query.trim()) {
          setSearchBooks([]);
        } else {
          const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&title=${encodeURIComponent(query)}&fields=*,availability`);
          const data = await response.json();
          setSearchBooks(data.docs.slice(0, 1));
        }
      } catch (error) {
        console.error("Une erreur s'est produite lors de la recherche :", error);
      }
    };

    fetchSearchBooks();
  }, [query]);

  return searchBooks;
};

export default useSearchOneBook;

