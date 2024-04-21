import React from "react";
import { useParams } from "react-router-dom";
import useBookDetails from "../Hooks/useBookDetails";
import useWikipediaDetails from "../Hooks/useWikipediaDetailsBooK";
import "../css/BookDetails.css";

const BookDetails = () => {
  const { title } = useParams();
  const bookDetails = useBookDetails(title);
  const wikipediaDetails = useWikipediaDetails(title);

  return (
    <div className="BookDetails-container">
      <div className="BookDetails-content">
        <div className="BookDetails-cover">
          {wikipediaDetails && wikipediaDetails.coverLink ? (
            <img src={wikipediaDetails.coverLink} alt="Couverture du livre" />
          ) : (
            <p className="BookDetails-error">Pas d'image disponible</p>
          )}
        </div>
        <div className="BookDetails-info">
        <h2 className="BookDetails-title">Détails du Livre</h2>
          {bookDetails ? (           
            <div>
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
                <p><span>Nombre de page :</span>  {bookDetails.number_of_pages_median}</p>
              )}
              <p>
                <span>Source Wikipedia :</span>{" "}
                <a href={`https://fr.wikipedia.org/wiki/${encodeURIComponent(title)}`}>
                  Lien vers Wikipedia
                </a>
              </p>
            </div>
          ) : (
            <p className="BookDetails-error">Aucun détail trouvé pour ce livre.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
