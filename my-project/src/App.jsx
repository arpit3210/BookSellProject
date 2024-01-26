import Home from "./Home.jsx";
import React from "react";
import { BookstoreProvider } from "./Contexts/BookstoreContext.jsx";
import Bookstore from "./Components/Bookstore.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <BookstoreProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Bookstore" element={<Bookstore />} />
          </Routes>
        </BookstoreProvider>
      </BrowserRouter>
    </>
  );
}
