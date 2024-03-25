import { useState, useEffect } from 'react';

const useSearchBook = (title) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      if (!title.trim()) {
        setBooks([]);
        return;
      }
      
      setIsLoading(true);
      setError(null);

      try {
        const formattedTitle = encodeURIComponent(title.trim()); 
        const response = await fetch(`https://openlibrary.org/search.json?q=${formattedTitle}&limit=1`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBooks(data.docs);
        setIsLoading(false);
      } catch (error) {
        console.error('Error searching books:', error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, [title]);

  return { books, isLoading, error };
};

export default useSearchBook;
