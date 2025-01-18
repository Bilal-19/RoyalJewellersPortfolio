import React, { useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function EstimateCost() {
  const [estimateProperties, setEstimateProperties] = useState({
    metalType: "Gold",
    metalWeight: "",
    gemstoneType: "Diamond",
    gemstoneQuantity: "",
    laborCost: "",
    laborType: "Basic Labor",
  });

  const handleSubmit = (event) => {
    // Calculations are performed in Dollars
    let costOfMetal;
    let costOfGemstones;
    let totalLaborCost;
    event.preventDefault();
    console.log(estimateProperties);

    // 1. Cost of Metal
    if (estimateProperties.metalType == "Gold") {
      costOfMetal = estimateProperties.metalWeight * 90;
    } else {
      costOfMetal = estimateProperties.metalWeight * 1;
    }

    // 2. Cost of Gemstones
    if (estimateProperties.gemstoneType == "Diamond") {
        costOfGemstones = estimateProperties.gemstoneQuantity * 1000;
    } else {
        costOfGemstones = estimateProperties.gemstoneQuantity * 5000;
    }

    // 3. Labor cost
    if (estimateProperties.laborType == 'Basic Labor'){
        totalLaborCost = estimateProperties.laborCost * 50
    } else if (estimateProperties.laborType == 'Skilled Labor'){
        totalLaborCost = estimateProperties.laborCost * 80
    } else {
        totalLaborCost = estimateProperties.laborCost * 120
    }

    // Final Cost
    let totalEstimationCost = Number(costOfMetal) + Number(costOfGemstones) + Number(totalLaborCost)
    alert(`Total Estimated Cost: $${totalEstimationCost}`)
  };

  const handleChange = (e) => {
    setEstimateProperties((value) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-8 mx-auto">
            <h2 className="text-champagne-gold text-center">
              Cost Estimation Tool
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit} className="ff-roboto">
              <label htmlFor="metalType" className="form-label mb-0">
                Select Metal Type:{" "}
              </label>
              <select
                name="metalType"
                id="metalType"
                className="form-select"
                value={estimateProperties.metalType}
                onChange={handleChange}
              >
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
              </select>

              <label htmlFor="metalWeight" className="form-label mb-0 mt-3">
                Enter Metal Weight:{" "}
              </label>
              <input
                name="metalWeight"
                type="number"
                className="form-control"
                placeholder="Enter Metal Weight"
                value={estimateProperties.metalWeight}
                onChange={handleChange}
                required
              />

              <label htmlFor="gemstoneType" className="form-label mb-0 mt-3">
                Select Gemstone Type:
              </label>
              <select
                name="gemstoneType"
                id="gemstoneType"
                className="form-select"
                value={estimateProperties.gemstoneType}
                onChange={handleChange}
              >
                <option value="Diamond">Diamond</option>
                <option value="Ruby">Ruby</option>
              </select>

              <label
                htmlFor="gemstoneQuantity"
                className="form-label mb-0 mt-3"
              >
                Enter Gemstone Quantity:
              </label>
              <input
                name="gemstoneQuantity"
                type="number"
                className="form-control"
                placeholder="Enter Gemstone Quantity"
                value={estimateProperties.gemstoneQuantity}
                onChange={handleChange}
                required
              />

              <label htmlFor="laborCost" className="form-label mb-0 mt-3">
                Labor Cost:
              </label>
              <div className="input-group">
                <input
                  type="number"
                  placeholder="Enter hours of Labor"
                  className="form-control"
                  name="laborCost"
                  value={estimateProperties.laborCost}
                  onChange={handleChange}
                  required
                />
                <select
                  name="laborType"
                  className="form-select"
                  value={estimateProperties.laborType}
                  onChange={handleChange}
                >
                  <option value="Basic Labor">Basic Labor ($50/hour)</option>
                  <option value="Skilled Labor">
                    Skilled Labor ($80/hour)
                  </option>
                  <option value="Expert Craftsmanship">
                    Expert Craftsmanship ($120/hour)
                  </option>
                </select>
              </div>

              <button className="calculate-cost-btn">Calculate Cost</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
