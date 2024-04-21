import React from "react";
import useLastChanges from "../Hooks/useLastChanges";
import "../css/HomePage.css"; 

const HomePage = () => {
  const { pageChanges, currentPage, isLoading, error, goToNextPage, goToPreviousPage } = useLastChanges();

  const handlePreviousPage = () => {
    goToPreviousPage();
  };

  const handleNextPage = () => {
    goToNextPage();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="HomePage-container"> 
      <h1>Derniers changements</h1>
      <div className="HomePage-list">
      <ul >
        {pageChanges.map((change, index) => (
          <li key={index}>
            {change.comment} - {change.timestamp}
          </li>
        ))}
      </ul></div>
      <div className="HomePage-pagination"> 
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          {"<<"}
        </button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage}> {">>"} </button>
      </div>
    </div>
  );
};

export default HomePage;
