import React from "react";
import {
  Testimonial,
  Authors,
  Connect,
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



      <div>
        <Testimonial />
      </div>



      <div>
        <Authors />
      </div>



      <div>
        <Connect />
      </div>


      <div>{/* <Bookstore /> */}</div>



      <div>
        <Footer />
      </div>


      
    </div>
  );
};

export default Home;
