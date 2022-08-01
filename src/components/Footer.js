import React from "react";
import img6 from "../assets/assets_Homework_Front-End_01/bitmap_2.png";
import img9 from "../assets/assets_Homework_Front-End_01/path-copy-2.png";

export default function Footer() {
  return (
    <div>
      <footer className="container">
        <img className="img6" src={img6} alt="" />
        <p className="p1">GET JOKES? GET PAID</p>
        <p className="p2">FOR SUBMITTING!</p>
        <p className="footerlink">
          <a href="#">
            SUBMIT JOKE
            <img src={img9} alt="" />
          </a>
        </p>
      </footer>
    </div>
  );
}
