import React from "react";
import {
  Testimonial,
  Authors,
  ContactForm,
  Header,
  // Bookstore,
  Footer,
  Navbar,
} from "./Components";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>



      <div>
        <Header />
      </div>



      <div id="Testimonial" >
        <Testimonial />
      </div>



      <div id="Authors">
        <Authors />
      </div>



      <div id="ContactForm">
        <ContactForm />
      </div>


      <div>{/* <Bookstore /> */}</div>



      <div id="Footer">
        <Footer />
      </div>



    </div>
  );
};

export default Home;
