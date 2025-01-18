import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-midnight-black mt-5">
        <div className="row ff-roboto">
          <div className="col-md-3 mt-5 mx-auto">
            <Link className="brand-name text-decoration-none">
              <h3>Royal Jewellers</h3>
            </Link>
            <Link className="nav-link text-ivory-white" to="/estimate/cost">
              Estimate Cost
            </Link>
            <Link className="nav-link text-ivory-white" to="/materials">
              Material Option
            </Link>
            <Link className="nav-link text-ivory-white" to="/request/quotation">
              Request Quotation
            </Link>
            <Link className="nav-link text-ivory-white" to="/contact/us">
              Contact Us
            </Link>
          </div>

          <div className="col-md-3 mt-5 mx-auto">
            <a href="tel:923082491543" className="text-soft-pearl-grey nav-link">
              <i class="fa-solid fa-phone social-icons"></i> +923082491543
            </a>
            <a
              href="mailto:hello@royaljewellers.com"
              className="text-soft-pearl-grey nav-link"
            >
              <i class="fa-solid fa-envelope social-icons"></i>{" "}
              hello@royaljewellers.com
            </a>
            <a href="https://karachi" className="text-soft-pearl-grey nav-link">
              <i class="fa-solid fa-location-dot social-icons"></i> Karachi,
              Pakistan
            </a>
          </div>

          <div className="col-md-3 mt-5 mx-auto">
           <a href="https://www.facebook.com" target="_blank" className="text-soft-pearl-grey nav-link"><i class="fa-brands fa-facebook social-icons"></i>facebook.com/Royal Jewellers</a>
           <a href="https://www.instagram.com" target="_blank" className="text-soft-pearl-grey nav-link"><i class="fa-brands fa-instagram social-icons"></i>instagram.com/Royal Jewellers</a>
           <a href="https://www.twitter.com" target="_blank" className="text-soft-pearl-grey nav-link"><i class="fa-brands fa-twitter social-icons"></i>twitter.com/Royal Jewellers</a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mx-auto">
            <hr className="text-ivory-white"></hr>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center mx-auto">
            <p className="text-soft-pearl-grey">&copy; 2024 Royal Jewellers. All Rights Reserved.</p>
            <p className="text-soft-pearl-grey">Designed & Developed by <a href="https://bilal-19.github.io/portfolio/" rel="nofollow" target="_blank"
            className="text-decoration-none text-soft-pearl-grey" id="backlink">Bilal Muhammad Yousuf</a></p>
          </div>
        </div>
      </div>
    </>
  );
}
