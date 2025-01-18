import React, { useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function RequestQuotation() {
  const [customerData, setCustomerData] = useState({
    customerName: "",
    customerEmail: "",
    customerContactNo: "",
    designSketchImg: "",
  });

  const handleChange = (e) => {
    setCustomerData(val => ({...val, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(customerData)
  } 
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-4 mx-auto">
            <h2 className="text-champagne-gold text-center">
              Request Quotation
            </h2>
            <form className="ff-roboto" enctype="multipart/form-data" action="https://formsubmit.co/bilalmuhammadyousuf543@gmail.com" method="post">
              <label className="form-label mb-0">Name: </label>
              <input
                type="text"
                className="form-control"
                value={customerData.customerName}
                name="customerName"
                onChange={handleChange}
                required
              />

              <label className="form-label mb-0 mt-2">Email: </label>
              <input
                type="email"
                className="form-control"
                value={customerData.customerEmail}
                name="customerEmail"
                onChange={handleChange}
                required
              />

              <label className="form-label mb-0 mt-2">Phone Number: </label>
              <input
                type="number"
                className="form-control"
                value={customerData.customerContactNo}
                name="customerContactNo"
                onChange={handleChange}
                required
              />

              <label className="form-label mb-0 mt-2">Upload Your Preferred Design Sketch: </label>
              <input
                type="file"
                className="form-control"
                value={customerData.designSketchImg}
                name="designSketchImg"
                onChange={handleChange}
                required
              />

              <input type="submit" value="Request Quote" id="request-quote-btn"/>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
