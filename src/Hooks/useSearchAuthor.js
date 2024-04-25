import { useState, useEffect } from "react";
const useSearchAuthor = (query) => {
  const [searchAuthors, setSearchAuthors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchSearchAuthors = async () => {
      try {
        const startIndex = (currentPage - 1) * 10;
        const response = await fetch(
          `https://openlibrary.org/search/authors.json?q=*&limit=15&offset=${startIndex}`
        );
        const data = await response.json();
        setSearchAuthors(data.docs);

        console.log("Objets récupérés :", data.docs);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la recherche :", error);
      }
    };

    fetchSearchAuthors();
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return { searchAuthors, goToNextPage, goToPreviousPage };
};

export default useSearchAuthor;

