import React from "react";
import { useParams } from "react-router-dom";
import useAuthorDetails from "../Hooks/useAuthorDetails";
import useWikipediaDetails from "../Hooks/useWikipediaDetailsAuthor";
import "../css/BookDetails.css";

const AuthorDetails = () => {
  const { name } = useParams();
  const authorDetails = useAuthorDetails(name);
  const wikipediaDetails = useWikipediaDetails(name);

  return (
    <div className="BookDetails-container">
      <h2 className="BookDetails-title">Détails de l'Auteur</h2>
      <div className="BookDetails-content">
        {authorDetails ? (
          <div>
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
        {wikipediaDetails ? (
          <div>
            <h3>Description de Wikipedia</h3>
            <p>{wikipediaDetails.description}</p>
            {wikipediaDetails.coverLink ? (
              <div>
                <img
                  src={wikipediaDetails.coverLink}
                  alt="Couverture de l'auteur"
                />
              </div>
            ) : (
              <p className="BookDetails-error">Pas d'image disponible</p>
            )}
            <p>
              <span>Source Wikipedia :</span>{" "}
              <a
                href={`https://fr.wikipedia.org/wiki/${encodeURIComponent(
                  name
                )}`}
              >
                Lien vers Wikipedia
              </a>
            </p>
          </div>
        ) : (
          <p className="BookDetails-error">
            Aucun détail Wikipedia trouvé pour cet auteur.
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthorDetails;
