// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }

import Home from "./Home.js";
import React from "react";
import { BookstoreProvider } from "./Contexts/BookstoreContext.js";
import Bookstore from "./Components/Bookstore.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { ToastContainer, toast } from 'react-toastify';

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
