import React from "react";
import Header from "../Component/Header";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid" id="home-banner">
        <div className="row pt-4">
          <div className="col-md-6 mx-auto text-center">
            <h2 className="main-heading">
              Your Perfect Jewelry, Perfectly Priced
            </h2>
            <p className="ff-roboto text-ivory-white">
              Discover the true cost of your dream jewelry piece with our
              accurate estimation tool
            </p>
            <Link className="cta-btn text-decoration-none" to="/estimate/cost">Estimate Your Jewelry Cost Now</Link>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-8 mx-auto ff-roboto text-midnight-black">
            <h2 className="main-heading">
              Crafted for You: Know the Value Behind Every Gem
            </h2>
            <p>
              Our platform simplifies the jewelry design process, providing you
              with an intuitive cost estimation tool that empowers you to make
              informed decisions. Whether you're dreaming of a custom engagement
              ring, a timeless necklace, or a statement bracelet, our website
              gives you a transparent breakdown of costs based on your chosen
              materials and design complexity. With access to various
              customization options and professional guidance, crafting your
              perfect jewelry piece has never been easier.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="feature-card">
              <p>
                Get an accurate cost breakdown for your custom jewelry piece,
                factoring in material quality, gemstone type, and design
                intricacies.
              </p>
              <Link className="feature-card-btn nav-link" to="/estimate/cost">
              <i class="fa-solid fa-tag feature-card-icon"></i>
                Cost Estimation Tool
              </Link>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="feature-card">
              <p>
                Choose from a wide range of materials, including gold, silver,
                platinum, and various precious stones, to find the perfect fit
                for your style and budget.
              </p>
              <Link className="feature-card-btn nav-link px-2" to="/materials">
                <i class="fa-solid fa-gem feature-card-icon"></i>
                 Material Options
              </Link>
            </div>
          </div>
         

        </div>
      </div>

      <Footer/>

    </>
  );
}
