import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Home from "./Pages/HomePage";
import Book from "./Pages/Books"; 
import Author from "./Pages/Author";
import BookDetails from "./Pages/BookDetails"
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/book:title" element={<BookDetails />} />
        <Route path="/author" element={<Author />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
