import { useState, useEffect } from "react";

const useLastChanges = () => {
  const [recentChanges, setRecentChanges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchAllChanges = async () => {
      try {
        const response = await fetch(`http://openlibrary.org/recentchanges.json`);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setRecentChanges(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllChanges();
  }, []);

  const getPageChanges = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return recentChanges.slice(startIndex, endIndex);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return { pageChanges: getPageChanges(), currentPage, isLoading, error, goToNextPage, goToPreviousPage };
};

export default useLastChanges;
