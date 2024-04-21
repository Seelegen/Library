import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Book from "./Pages/Books";
import Author from "./Pages/Author";
import BookDetails from "./Pages/BookDetails";
import AuthorDetails from "./Pages/AuthorDetails";
import HomePage from "./Pages/Homepage";
import "./App.css";

const App = () => {
  const location = useLocation();
const excludedPaths = ["/book", "/author", "/book/", "/author/"];
const shouldDisplayHomePage = !excludedPaths.some(path => location.pathname.startsWith(path));


  return (
    <div className="App">
      <Header />
      {shouldDisplayHomePage && <HomePage />}
      <Routes>
        <Route path="/book" element={<Book />} />
        <Route path="/book/:title" element={<BookDetails />} />
        <Route path="/author" element={<Author />} />
        <Route path="/author/:name" element={<AuthorDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
