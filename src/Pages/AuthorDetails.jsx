import React from "react";
import { useParams } from "react-router-dom";
import useAuthorDetails from "../Hooks/useAuthorDetails";
import "../css/BookDetails.css"
const AuthorDetails = () => {
  const { name } = useParams();
  const authorDetails = useAuthorDetails(name);

  return (
    <div className="BookDetails-container">
      <h2 className="BookDetails-title">Détails de l'Auteur</h2>
      {authorDetails ? (
        <div className="BookDetails-content">
          <p>
            <span>Nom:</span> {authorDetails.name}
          </p>
          {authorDetails.birth_date && (
            <p>
              <span>Date de naissance:</span> {authorDetails.birth_date}
            </p>
          )}
          {authorDetails["top_work"] && (
            <p>
              <span>Travail principal:</span> {authorDetails["top_work"]}
            </p>
          )}
          {authorDetails["work_count"] && (
            <p>
              <span>Nombre d'œuvres:</span> {authorDetails["work_count"]}
            </p>
          )}
          {authorDetails["top_subjects"] && (
            <p>
              <span>Sujets principaux:</span>{" "}
              {authorDetails["top_subjects"].join(", ")}
            </p>
          )}
        </div>
      ) : (
        <p className="BookDetails-error">
          Aucun détail trouvé pour cet auteur.
        </p>
      )}
    </div>
  );
};

export default AuthorDetails;
