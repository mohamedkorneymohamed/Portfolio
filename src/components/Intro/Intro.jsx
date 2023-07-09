import React, { useContext, useEffect, useState } from "react";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/2023_03_12_08_14_IMG_4203-removebg-preview.png";
import glassesimoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import "./Intro.css";
import Toggle from "../Toggle/Toggle";
import Navbar from "../Navbar/Navbar";

export default function Intro() {
  // Transition
  const transition = { duration: 2, type: "spring", delay: 1 };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [isloading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1200);
  }, []);

  return (
    <>
      {isloading ? (
        <div className="d-flex justify-content-center align-items-center vh-100 z-3">
          <PuffLoader color="#fb982f" width="500" />
        </div>
      ) : (
        <div className="container  pt-3 ">
          <div className="row">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0, duration: 10 }}
                transition={{ duration: 2, type: "spring", delay: 2 }}
              >
                <div className="i-left">
                  <Toggle />
                  <div className="i-name">
                    {/* yahan change hy darkmode ka */}
                    <span className="fs-1 fw-bold ">Hy! I Am</span>
                    <span className="fs-1">Mohamed Koreny</span>
                    <span className="fs-6 fw-bold icon">
                      Frontend Developer-React
                    </span>
                    <ul className="list-unstyled ">
                      <li className="pb-1">
                        <i className="fa-regular fa-envelope icon ">
                          <a
                            href="mohamed.koreny.mohamed@gmail.com"
                            className="text-decoration-none link ps-2"
                          >
                            mohamed.koreny.mohamed@gmail.com
                          </a>
                        </i>
                      </li>
                      <li className="pb-1">
                        <i className="fa-brands fa-github icon ">
                          <a
                            href="https://github.com/mohamedkorneymohamed"
                            className="text-decoration-none text-dark ps-2 "
                          >
                            https://github.com/mohamedkorneymohamed
                          </a>
                        </i>
                      </li>
                      <li className="pb-1">
                        <i className="fa-solid fa-phone icon ">
                          <a
                            href="mohamed.koreny.mohamed@gmail.com"
                            className="text-decoration-none text-dark ps-2"
                          >
                            01119858118
                          </a>
                        </i>
                      </li>
                      <li className="pb-1">
                        <i className="fa-solid fa-location-dot icon ">
                          <a
                            href="mohamed.koreny.mohamed@gmail.com"
                            className="text-decoration-none text-dark ps-2"
                          >
                            Cairo
                          </a>
                        </i>
                      </li>
                    </ul>
                  </div>
                  {/* social icons */}
                  <div className="i-icons pb-5">
                    <a href="https://github.com/mohamedkorneymohamed" target={"_blank"} rel="noreferrer">
                      {" "}
                      <img src={Github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohamed-korney-675407264/" target={"_blank"} rel="noreferrer">
                      <img src={LinkedIn} alt="" />
                    </a>
                    <img src={Instagram} alt="" />
                  </div>
                </div>
              </motion.div>
              {/* left name side */}
            </div>
            <div className="col-lg-6 ">
              {/* right image side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0, duration: 10 }}
                transition={{ duration: 2, type: "spring", delay: 1 }}
              >
                <div className="i-right ">
                  <div className="rightImg position-relative p-3">
                    <img
                      src={Vector1}
                      className=" position-absolute   w-75 top-100 "
                      alt=""
                    />
                    <img
                      src={Vector2}
                      className="position-absolute  w-75   top-100"
                      alt=""
                    />
                    <img
                      src={boy}
                      className="position-absolute  w-75 "
                      alt=""
                    />

                    {/* animation */}
                    <motion.img
                      initial={{ left: "-36%" }}
                      whileInView={{ left: "-24%" }}
                      transition={transition}
                      src={glassesimoji}
                      className="w-25 position-absolute d-none d-md-block "
                      alt=""
                    />

                    <motion.div
                      initial={{ x: 100, y: 350 }}
                      animate={{ x: 0 }}
                      transition={transition}
                    >
                      <div className="crowImg  d-none d-md-block">
                        <div className="row  align-items-center p-2 w-50  rounded-5    bg-light">
                          <div className="col-sm-3  ">
                            <img src={crown} className="img-fluid " alt="" />
                          </div>
                          <div className="col-sm-9">
                            <span className="text-uppercase icon  ">
                              web develpoer
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div
            className="blur"
            style={{ background: "rgb(238 210 255)", right: 0, top: 0 }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              bottom: 0,
              width: "21rem",
              height: "11rem",
              left: "0",
            }}
          ></div>
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: -100 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <Navbar />
          </motion.div>
        </div>
      )}
    </>
  );
}
