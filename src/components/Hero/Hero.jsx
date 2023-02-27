import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from 'number-counter'

const Hero = () => {

  const mobile = window.innerWidth<=768 ? true: false;

  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile? "178px":"238px" }}
            whileInView={{ left: "8px" }}
            transition={{ duration: 2, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={100} delay="4" preFix="+" /></span>
            <span>expert coachs</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={900} delay="4" preFix="+" /></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={20} delay="4" preFix="+" /></span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">join now</button>

        <motion.div
          whlileInView={{ right: "7rem" }}
          transition={{ duration: 2, type: "tween" }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "28rem" }}
          whileInView={{ right: "22rem" }}
          transition={{ duration: 2, type: "tween" }}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />

        <motion.div
          initial={{ right: "45rem" }}
          whileInView={{ right: "32rem" }}
          transition={{ duration: 2, type: "tween" }}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
