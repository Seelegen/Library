import { useState, useEffect } from "react";

const useAuthorDetails = (name) => {
  const [authorDetails, setAuthorDetails] = useState(null);

  useEffect(() => {
    const fetchAuthorDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/search/authors.json?q=${encodeURIComponent(name)}`);
        const data = await response.json();
        if (data.docs.length > 0) {
          setAuthorDetails(data.docs[0]);
        } else {
          setAuthorDetails(null);
        }
      } catch (error) {
        console.error("Une erreur s'est produite lors de la recherche :", error);
      }
    };

    fetchAuthorDetails();
  }, [name]);

  return authorDetails;
};

export default useAuthorDetails;
