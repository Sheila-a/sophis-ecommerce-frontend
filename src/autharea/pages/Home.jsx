import React from "react";
import RecomProds from "../components/RecomProds";
import NewArrivals from "../components/NewArrivals";
import Hero from "../components/Carousel";
import Review from "../components/Review";
import Offers from "../components/Offers";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import BrandsComp from "../components/BrandsComp";
const Home = () => {
  return (
    <div className="home">
      <Hero />
      <RecomProds />

      <div>{/* -------------------Flash Sales---------------- */}</div>

      <NewArrivals />

      <div>{/* -------------------Top Ranked---------------- */}</div>

      <BrandsComp />

      <Review />

      <Offers />
    </div>
  );
};

export default Home;
