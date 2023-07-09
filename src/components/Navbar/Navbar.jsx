import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light mb-2 position-fixed start-50 translate-middle-x   ">
        <div className="container ">
          <div className="">
            <ul className="navbar-nav  mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">
                  <button className="button n-button">Contact</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
