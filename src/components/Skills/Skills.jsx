import React, { useContext, useEffect, useState } from "react";
import "./Skills.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./MohamedKorney Mohamed 04-2023 - Frontend Developer_3.pdf";
import { PuffLoader } from "react-spinners";
import Navbar from "../Navbar/Navbar";
import { type } from "@testing-library/user-event/dist/type";
import html from "../../img/icons8-html.svg";
import css from "../../img/icons8-css3.svg";
import bootstrap from "../../img/icons8-bootstrap.svg";
import javascript from "../../img/icons8-javascript.svg";
import jquery from "../../img/icons8-jquery.svg";
import sass from "../../img/icons8-sass.svg";
import react from "../../img/icons8-react-js.svg";
import mongo from "../../img/icons8-mongodb-a-cross-platform-document-oriented-database-program-48.png";
import node from "../../img/icons8-nodejs.svg";
import mysql from "../../img/icons8-mysql.svg";
import database from "../../img/icons8-database-50.png";
import git from "../../img/icons8-git.svg";
import github from "../../img/icons8-github.svg";
import figma from "../../img/icons8-figma.svg";
import CountUp from "react-countup";
export default function Skills() {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 2,
    type: "spring",
  };

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
        <div className="container   pt-5 pb-4">
          <div className="row" id="services">
            <div className="col-lg-3">
              {/* left side */}
              <div className="awesome pb-5 text-center ">
                {/* dark mode */}
                <motion.div
                initial={{opacity:0}}
                animate={{x:[-50,1] , opacity:1}}
                transition={transition}
                >
                <span className="fs-1 fw-bold">My Skills</span>
                </motion.div>
                <motion.div 
                animate={{y:[50 , 10] }}
                translate={{    duration: 2,
                  type: "spring",delay: 2}}
                >
                <a href={Resume} download className="d-block">
                  <button className=" buttonCv s-button">Download CV</button>
                </a>
                </motion.div>

              </div>
            </div>
            <div className="col-lg-9">
              {/* right */}
              <div className="row   gx-sm-0 gy-2">
                {/* firstCard */}

                <div className="col-md-4 ">
                  <motion.div
                            
                    animate={{ y: [10 , -40] }}
                    transition={transition}
                  >
                    <div className="card text-center p-3 rounded-5">
                      <h3 className="header">Professional</h3>
                      <div className="progressCard pb-2">
                        <img src={html} className="d-block" alt="" />
                        <div className="headerProgress d-flex justify-content-between">
                          <span>Html5</span>
                          <span>
                            <CountUp
                              start={0}
                              end={95}
                              duration={3}
                              className="fw-bold"
                            ></CountUp>
                            <span className="percentage ">%</span>
                          </span>
                        </div>
                        <div
                          className="progress "
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar html   "></div>
                        </div>
                      </div>
                      <div className="progressCard pb-2">
                        <img src={css} className="d-block" alt="" />
                        <div className="headerProgress d-flex justify-content-between">
                          <span>Css 3</span>
                          <span>
                            <CountUp
                              start={0}
                              end={90}
                              duration={3}
                              className="fw-bold"
                            ></CountUp>
                            <span className="percentage ">%</span>
                          </span>
                        </div>
                        <div
                          className="progress "
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar  css"></div>
                        </div>
                      </div>
                      <div className="progressCard pb-2">
                        <img src={bootstrap} className="d-block" alt="" />
                        <div className="headerProgress d-flex justify-content-between">
                          <span>Bootstrap 5</span>
                          <span>
                            <CountUp
                              start={0}
                              end={90}
                              duration={3}
                              className="fw-bold"
                            ></CountUp>
                            <span className="percentage ">%</span>
                          </span>
                        </div>
                        <div
                          className="progress "
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar  bootstrap"></div>
                        </div>
                      </div>
                      <div className="progressCard pb-2">
                        <img src={sass} className="d-block" alt="" />
                        <div className="headerProgress d-flex justify-content-between">
                          <span>Sass</span>
                          <span>
                            <CountUp
                              start={0}
                              end={80}
                              duration={3}
                              className="fw-bold"
                            ></CountUp>
                            <span className="percentage ">%</span>
                          </span>
                        </div>
                        <div
                          className="progress "
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar  sass"></div>
                        </div>
                      </div>
                      <div className="progressCard pb-2">
                        <img src={jquery} className="d-block" alt="" />
                        <div className="headerProgress d-flex justify-content-between">
                          <span>Jquery</span>
                          <span>
                            <CountUp
                              start={0}
                              end={85}
                              duration={3}
                              className="fw-bold"
                            ></CountUp>
                            <span className="percentage ">%</span>
                          </span>
                        </div>
                        <div
                          className="progress "
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar  jquery"></div>
                        </div>
                      </div>
                      <div className="progressCard pb-2">
                        <img src={javascript} className="d-block" alt="" />
                        <div className="headerProgress d-flex justify-content-between">
                          <span>Javascript</span>
                          <span>
                            <CountUp
                              start={0}
                              end={85}
                              duration={3}
                              className="fw-bold"
                            ></CountUp>
                            <span className="percentage ">%</span>
                          </span>
                        </div>
                        <div
                          className="progress "
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar  javascript"></div>
                        </div>
                      </div>
                      <div className="progressCard pb-2">
                        <img src={react} className="d-block" alt="" />
                        <div className="headerProgress d-flex justify-content-between">
                          <span>React</span>
                          <span>
                            <CountUp
                              start={0}
                              end={85}
                              duration={3}
                              className="fw-bold"
                            ></CountUp>
                            <span className="percentage ">%</span>
                          </span>
                        </div>
                        <div
                          className="progress "
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar  react"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                {/* secondCard */}
                <div className="col-md-4">
                  <motion.div
                    animate={{ y: [-100 , 50 ,-40]}}
                    transition={transition}
                  >
                    <div className="card text-center p-3 h-100  rounded-5">
                      <h3 className="header">Intermediate</h3>
                      <div className="progressCard pb-2">
                        <img src={mysql} className="d-block" alt="" />
                        <div className="headerProgress d-flex justify-content-between">
                          <span>Mysql</span>
                          <span>
                            <CountUp
                              start={0}
                              end={75}
                              duration={3}
                              className="fw-bold"
                            ></CountUp>
                            <span className="percentage ">%</span>
                          </span>
                        </div>
                        <div
                          className="progress "
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar  mysql"></div>
                        </div>
                      </div>
                      <div className="progressCard pb-2">
                        <img src={mongo} className="d-block" alt="" />
                        <div className="headerProgress d-flex justify-content-between">
                          <span>Mongodb</span>
                          <span>
                            <CountUp
                              start={0}
                              end={75}
                              duration={3}
                              className="fw-bold"
                            ></CountUp>
                            <span className="percentage ">%</span>
                          </span>
                        </div>
                        <div
                          className="progress "
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar  mongo"></div>
                        </div>
                      </div>
                      <div className="progressCard pb-2">
                        <img src={node} className="d-block" alt="" />
                        <div className="headerProgress d-flex justify-content-between">
                          <span>Node.js</span>
                          <span>
                            <CountUp
                              start={0}
                              end={65}
                              duration={3}
                              className="fw-bold"
                            ></CountUp>
                            <span className="percentage ">%</span>
                          </span>
                        </div>
                        <div
                          className="progress "
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar  node"></div>
                        </div>
                      </div>
                      <div className="progressCard pb-2">
                        <img src={database} className="d-block" alt="" />
                        <div className="headerProgress d-flex justify-content-between">
                          <span>Database</span>
                          <span>
                            <CountUp
                              start={0}
                              end={60}
                              duration={3}
                              className="fw-bold"
                            ></CountUp>
                            <span className="percentage ">%</span>
                          </span>
                        </div>
                        <div
                          className="progress "
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar database "></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                {/* thiredCard */}
                <div className="col-md-4 ">
                  <motion.div
                    // inherit={{  x: 100 }}
                    animate={{  x:  [-50,100 ,-1] ,y:-40}}
                    transition={transition}
                  >
                    <div className="card text-center p-3  h-100 rounded-5">
                      <h3 className="header">Extra</h3>
                      <div className="progressCard pb-2">
                        <img src={git} className="d-block" alt="" />
                        <div className="headerProgress d-flex justify-content-between">
                          <span>Git</span>
                          <span>
                            <CountUp
                              start={0}
                              end={60}
                              duration={3}
                              className="fw-bold"
                            ></CountUp>
                            <span className="percentage ">%</span>
                          </span>
                        </div>
                        <div
                          className="progress "
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar git "></div>
                        </div>
                      </div>
                      <div className="progressCard pb-2">
                        <img src={github} className="d-block" alt="" />
                        <div className="headerProgress d-flex justify-content-between">
                          <span>Github</span>
                          <span>
                            <CountUp
                              start={0}
                              end={60}
                              duration={3}
                              className="fw-bold"
                            ></CountUp>
                            <span className="percentage ">%</span>
                          </span>
                        </div>
                        <div
                          className="progress "
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar  github"></div>
                        </div>
                      </div>
                      <div className="progressCard pb-2">
                        <img src={figma} className="d-block" alt="" />
                        <div className="headerProgress d-flex justify-content-between">
                          <span>Figma</span>
                          <span>
                            <CountUp
                              start={0}
                              end={60}
                              duration={3}
                              className="fw-bold"
                            ></CountUp>
                            <span className="percentage ">%</span>
                          </span>
                        </div>
                        <div
                          className="progress "
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar  figma"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
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
            animate={{ y: -55 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <Navbar />
          </motion.div>
        </div>
      )}
    </>
  );
}
