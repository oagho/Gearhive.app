import React from "react";
import Slideshow from "../components/Slideshow";
import FeaturedProducts from "../components/FeaturedProducts";
import ShopByIndustry from "../components/ShopByIndustry";
import LatestUpdates from "../components/LatestUpdates";
import "../pages/CSS/Home.css";

const Home = () => {
  return (
    <div>
      <main>
        <Slideshow interval={5000} />
        <FeaturedProducts
          apiUrl="https://gearhiveserver.onrender.com/api/products"
          numProducts={4}
        />
        <ShopByIndustry />
        <LatestUpdates />
      </main>
    </div>
  );
};

export default Home;
