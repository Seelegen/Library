import { useState, useEffect } from "react";

const useAuthorDetails = (name) => {
  const [authorDetails, setAuthorDetails] = useState(null);

  useEffect(() => {
    const fetchAuthorDetails = async () => {
      try {
        const response = await fetch(`https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`);
        const data = await response.json();
        const { description, thumbnail } = data;
        const coverLink = thumbnail ? thumbnail.source : null;

        setAuthorDetails({ description, coverLink });
      } catch (error) {
        console.error("Une erreur s'est produite lors de la recherche sur Wikipedia :", error);
      }
    };

    fetchAuthorDetails();
  }, [name]);

  return authorDetails;
};

export default useAuthorDetails;
