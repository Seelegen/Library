import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { title } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(title)}&title=${encodeURIComponent(title)}&fields=*,availability`);
        const data = await response.json();
        if (data.docs.length > 0) {
          setBookDetails(data.docs[0]);
          console.log(data.docs[0]); 
        } else {
          setBookDetails(null);
        }
      } catch (error) {
        console.error("Une erreur s'est produite lors de la recherche :", error);
      }
    };

    fetchBookDetails();
  }, [title]);

  return (
    <div>
      <h2>Détails du Livre</h2>
      {bookDetails ? (
        <div>
          <p>Titre: {bookDetails.title}</p>
          <p>Auteur: {bookDetails.author_name}</p>
          <p>Version: {bookDetails._version_}</p>
          <p>Nombre de lecture courante: {bookDetails.currently_reading_count}</p>
          <p>Première phrase : {bookDetails.first_sentence.join(" ")}</p>
          <p>Année de publication :{bookDetails.first_publish_year}</p>
          <p>Langue valable : {bookDetails.language.join("--")}</p>
          <p>Nombre de page :  {bookDetails.number_of_pages_median}</p>
        </div>
      ) : (
        <p>Aucun détail trouvé pour ce livre.</p>
      )}
    </div>
  );
};

export default BookDetails;
