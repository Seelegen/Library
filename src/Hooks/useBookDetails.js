import { useState, useEffect } from "react";
const useBookDetails = (title) => {
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(title)}&title=${encodeURIComponent(title)}&fields=*,availability`);
        const data = await response.json();
        if (data.docs.length > 0) {
          setBookDetails(data.docs[0]);
        } else {
          setBookDetails(null);
        }
      } catch (error) {
        console.error("Une erreur s'est produite lors de la recherche :", error);
      }
    };

    fetchBookDetails();
  }, [title]);

  return bookDetails;
};

export default useBookDetails;
