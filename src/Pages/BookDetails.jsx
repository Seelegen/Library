//BookDeatils 
import React from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { title } = useParams();


  return (
    <div>
      <h2>Détails du Livre</h2>
      <p>ID du Livre: {title}</p>
    </div>
  );
};

export default BookDetails;
