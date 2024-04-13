import { useState, useEffect } from "react";

const useSearchBook = () => {
  const [searchBooks, setSearchBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const startIndex = (currentPage - 1) * 5;
        const response = await fetch(
          `https://openlibrary.org/search.json?q=ap&fields=*,availability&limit=14&offset=${startIndex}`
        );
        const data = await response.json();
        setSearchBooks(data.docs);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la recherche :", error);
      }
    };

    fetchAllBooks();
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return { searchBooks, goToNextPage, goToPreviousPage };
};

export default useSearchBook;
