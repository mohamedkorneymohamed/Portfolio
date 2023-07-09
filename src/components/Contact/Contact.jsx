import React, { useContext, useEffect, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import { PuffLoader } from "react-spinners";

export default function Contact() {
  const [isloading, setloading] = useState(false);
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rub683n",
        "template_fused56",
        form.current,
        "GUAPzqt54drA9NbnN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );

  };
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1200);
  }, []);
  return <>
    {isloading?        <div className="d-flex justify-content-center align-items-center vh-100 z-3">
    <PuffLoader color="#fb982f" width="500" />
  </div>:<><div className="container vh-100">
  <div className="contact-form" id="contact">
    {/* left side copy and paste from work section */}
    <div className="w-left">
      <div className="awesome text-center">
        {/* darkMode */}
        <motion.div
        initial={{opacity:-1}}
        animate={{x:[-50 ,1] ,opacity:1}}
        transition={transition}
        >
        <span className="fs-1 fw-bold">Get in Touch</span>
        </motion.div>
        <span className="d-block fs-4 fw-bold icon " >Contact me</span>
        <div
          className="blur s-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
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
    {/* right side form */}
    <div className="c-right">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" className="user"  placeholder="Name"/>
        <input type="email" name="user_email" className="user" placeholder="Email"/>
        <textarea name="message" className="user" placeholder="Message"/>
        <input type="submit" value="Send" className="button"/>
        <span>{done && "Thanks for Contacting me"}</span>
        <div
          className="blur c-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
      </form>
    </div>
  </div> 
  <motion.div
          initial={{ y: 50 }}
          animate={{ y: -100 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <Navbar />
        </motion.div>
  </div></>}
    
 </>
}
