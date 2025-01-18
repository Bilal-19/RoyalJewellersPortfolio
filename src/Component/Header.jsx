import React from "react";
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <>
      <div className="container-fluid shadow">
        <div className="row">
          <nav className="navbar navbar-expand-lg bg-midnight-black nav-bottom-border">
            <div className="container-fluid">
              <Link className="navbar-brand brand-name" to="/">
              <i class="fa-solid fa-gem"></i>
              Royal Jewellers
              </Link>
              <button
                className="navbar-toggler bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link text-ivory-white" to="/estimate/cost">
                      Estimate Cost
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-ivory-white" to="/materials">
                      Material Option
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-ivory-white" to="/request/quotation">
                      Request Quotation
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-ivory-white" to="/contact/us">
                     Contact Us
                    </Link>
                  </li>
                </ul>
               
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
