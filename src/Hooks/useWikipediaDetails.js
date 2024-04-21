import { useState, useEffect } from "react";

const useWikipediaDetails = (title) => {
  const [wikipediaDetails, setWikipediaDetails] = useState(null);

  useEffect(() => {
    const fetchWikipediaDetails = async () => {
      try {
        const response = await fetch(`https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
        const data = await response.json();
        const { description, thumbnail } = data;
        const coverLink = thumbnail ? thumbnail.source : null;

        setWikipediaDetails({ description, coverLink });
      } catch (error) {
        console.error("Une erreur s'est produite lors de la recherche sur Wikipedia :", error);
      }
    };

    fetchWikipediaDetails();
  }, [title]);

  return wikipediaDetails;
};

export default useWikipediaDetails;
