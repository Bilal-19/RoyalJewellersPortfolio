import React, { useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ContactUs() {
  const form = useRef();
  const submitData = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_0gu1hzm", "template_q84u7uy", form.current, {
        publicKey: "RbqjL1PQb_rxrXkaz",
      })
      .then(
        () => {
 toast.success("Thank you!. Our team will contact you soon.")
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.warning("Please provide valid information")
        }
      );
  };
  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row mt-5">
          <h2 className="text-champagne-gold text-center mb-3">Contact Us</h2>
          <div className="col-md-4 mx-auto mb-3">
            <a href="tel:923082491543" className="text-midnight-black nav-link">
              <i class="fa-solid fa-phone social-icons"></i> +923082491543
            </a>
            <a
              href="mailto:hello@royaljewellers.com"
              className="text-midnight-black nav-link"
            >
              <i class="fa-solid fa-envelope social-icons"></i>{" "}
              hello@royaljewellers.com
            </a>
            <a href="https://karachi" className="text-midnight-black nav-link">
              <i class="fa-solid fa-location-dot social-icons"></i> Karachi,
              Pakistan
            </a>
          </div>
          <div className="col-md-4 mx-auto">
            <form className="ff-roboto" ref={form} onSubmit={submitData}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter your name"
                name="from_name"
                required
              />
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter your email"
                name="from_email"
                required
              />
              <textarea
                className="form-control mb-3"
                rows="8"
                style={{ resize: "none" }}
                placeholder="Write your message here"
                name="message"
                required
              ></textarea>
              <button className="contact-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}
