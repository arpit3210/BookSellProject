import Home from "./Home.jsx";
import React from "react";
import { BookstoreProvider } from "./Contexts/BookstoreContext.jsx";
import Bookstore from "./Components/Bookstore.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




export default function App() {
  return (
    <>
        <BookstoreProvider>
      <BrowserRouter>
      
          <Routes>
            <Route path="/" element={<Home />} />
         
            <Route path="/Bookstore" element={<Bookstore />} />
          </Routes>
      </BrowserRouter>
        </BookstoreProvider>
    </>
  );
}
