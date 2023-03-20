import React from "react";
import Navbar from "../routes/Navbar/Navbar";
import Carousel from "./Carousel";
import Card from "../routes/Card/Card";
import Footer from "../routes/Footer/Footer";


const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      

      <div  className="mt-0">
        <Carousel />
      </div>

      <div className="m-3">
        <Card />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
      <hr />
        <Footer />
      </div>
    </>
  );
};

export default Home;
