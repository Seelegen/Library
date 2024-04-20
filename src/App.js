import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Book from "./Pages/Books"; 
import Author from "./Pages/Author";
import BookDetails from "./Pages/BookDetails";
import AuthorDetails from "./Pages/AuthorDetails";
import "./App.css"; 

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/book" element={<Book />} />
        <Route path="/book/:title" element={<BookDetails />} />
        <Route path="/author" element={<Author />} />
        <Route path="/author/:name" component={AuthorDetails} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;