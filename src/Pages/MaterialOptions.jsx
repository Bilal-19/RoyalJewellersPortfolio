import React from "react";
import Header from "../Component/Header";
import MaterialCard from "../Component/MaterialCard";
import Materials from "../Data/Material";
import Footer from "../Component/Footer";

export default function MaterialOptions() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-8 mx-auto">
            <h2 className="text-champagne-gold text-center">Choose the Perfect Material to Match Your Vision.</h2>
          <p className="ff-roboto">Select from a wide range of premium materials, including gold, platinum, and sterling silver, to craft your ideal jewelry piece. Discover our stunning collection of precious gemstones, from classic diamonds to vibrant sapphires. Each option is carefully sourced to ensure lasting beauty and quality. Find the perfect combination that suits your style and budget effortlessly.</p>
          </div>
        </div>
        <div className="row">
            {Materials.map(data=><><MaterialCard data={data}/></>)}
        </div>
      </div>
      <Footer/>
    </>
  );
}
