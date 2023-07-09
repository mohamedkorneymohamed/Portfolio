import React, { useContext, useEffect, useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import { PuffLoader } from "react-spinners";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import ecommerce from '../../img/ecommerce (1).png'
import portfolio from '../../img/portfolio.png'
import portfolio2 from '../../img/portfolio2.png'
import portfolio3 from '../../img/portfolio3.png'
import life from '../../img/life.png'
import food from '../../img/food.png'

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
import { Autoplay } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination, Navigation ,Autoplay]);
export default function Portfolio() {
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
        <div className="container vh-100 ">
          <div className="portfolio" id="portfolio">
            {/* heading */}
            <span style={{ color: darkMode ? "white" : "" }}>
              Recent Projects
            </span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                    navigation={true}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true
                    }}
                    pagination={{
                      clickable: true
                    }}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false
                    }}
                    className="portfolio-slider"
            >
              <SwiperSlide>
                <a href="https://mohamedkorneymohamed.github.io/Ecommerce/"target={"_blank"} rel="noreferrer"><img src={ecommerce} alt="" /></a>
                
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://mohamedkorneymohamed.github.io/DevFolio/" target={"_blank"} rel="noreferrer"><img src={portfolio} alt="" /></a>
                
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://mohamedkorneymohamed.github.io/Kerri/" target={"_blank"} rel="noreferrer"><img src={portfolio2} alt="" /></a>
                
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://mohamedkorneymohamed.github.io/Kirre/" target={"_blank"} rel="noreferrer"><img src={portfolio3} alt="" /></a>
                
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://mohamedkorneymohamed.github.io/gamming/" target={"_blank"} rel="noreferrer"><img src={life} alt="" /></a>
                
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://mohamedkorneymohamed.github.io/Yummy/"target={"_blank"} rel="noreferrer"><img src={food} alt="" /></a>
                
              </SwiperSlide>
            </Swiper>
          </div>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 80 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <Navbar />
          </motion.div>
          <div
            className="blur"
            style={{ background: "rgb(238 210 255)",
              right:0,
              top:0
          
          }}
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
        </div>
      )}
    </>
  );
}
