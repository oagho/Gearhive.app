import React from "react";
import Slideshow from "../components/Slideshow";
import FeaturedProducts from "../components/FeaturedProducts";
import ShopByIndustry from "../components/ShopByIndustry";
import LatestUpdates from "../components/LatestUpdates";
import { API_BASE } from "../config"; // ✅ Import base URL
import "../pages/CSS/Home.css";

const Home = () => {
  return (
    <div>
      <main>
        <Slideshow interval={5000} />
        <FeaturedProducts
          apiUrl={`${API_BASE}/api/products`} // ✅ Uses dynamic environment
          numProducts={4}
        />
        <ShopByIndustry />
        <LatestUpdates />
      </main>
    </div>
  );
};

export default Home;
