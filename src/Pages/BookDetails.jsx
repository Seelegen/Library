import React from "react";
import { useParams } from "react-router-dom";
import useBookDetails from "../Hooks/useBookDetails";
import "../css/BookDetails.css";

const BookDetails = () => {
  const { title } = useParams();
  const bookDetails = useBookDetails(title);

  return (
    <div className="BookDetails-container"> 
      <h2 className="BookDetails-title">Détails du Livre</h2>
      {bookDetails ? (
        <div className="BookDetails-content"> 
          {bookDetails.title && <p><span>Titre:</span> {bookDetails.title}</p>}
          {bookDetails.author_name && <p><span>Auteur: </span>{bookDetails.author_name}</p>}
          {bookDetails._version_ && <p><span>Version:</span> {bookDetails._version_}</p>}
          {bookDetails.currently_reading_count && (
            <p><span>Nombre de lecture courante:</span> {bookDetails.currently_reading_count}</p>
          )}
          {bookDetails.first_sentence && (
            <p><span>Première phrase :</span> {bookDetails.first_sentence.join(" ")}</p>
          )}
          {bookDetails.first_publish_year && (
            <p><span>Année de publication :</span>{bookDetails.first_publish_year}</p>
          )}
          {bookDetails.language && (
            <p><span>Langue valable : </span> {bookDetails.language.join("--")}</p>
          )}
          {bookDetails.number_of_pages_median && (
           <p> <span>Nombre de page : </span>  {bookDetails.number_of_pages_median}</p>
          )}
        </div>
      ) : (
        <p className="BookDetails-error">Aucun détail trouvé pour ce livre.</p>
      )}
    </div>
  );
};

export default BookDetails;
