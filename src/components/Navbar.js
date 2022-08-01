import React from "react";
import img1 from "../assets/assets_Homework_Front-End_01/shape.png";
import img2 from "../assets/assets_Homework_Front-End_01/path_2.png";
import img3 from "../assets/assets_Homework_Front-End_01/bitmap.png";
import img4 from "../assets/assets_Homework_Front-End_01/search-copy.png";

export default function Navbar() {
  return (
    <div>
      <div className="container">
        <nav className="wrapper">
          <ul>
            <li className="wrapperli">
              <a href="#">SO FUNKTIONIERT'S</a>
            </li>
            <li className="wrapperli">
              <a href="#">SONDERANGEBOTE</a>
            </li>
            <li className="menu-deroulant wrapperli">
              <a href="#">
                <img className="img1" src={img1} alt="shape" />
                BEREICH
                <img className="img2" src={img2} alt="logo" />
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="#"> My Published jokes</a>
                </li>
                <hr className="hr-sub-menu" />
                <li>
                  <a href="#">My saved jokes</a>
                </li>

                <hr className="hr-sub-menu" />
                <li>
                  <a href="#">Account information</a>
                </li>
                <hr className="hr-sub-menu" />
                <li>
                  <a href="#">Published new joke</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <section>
        <div className="container">
          <div className="card">
            <img className="img3" src={img3} alt="bitmap" />
            <div className="head">
              <h2 className="heading">The Joke Bible</h2>
              <p className="heading1">Daily Laughs for you and yours</p>
            </div>
            <div id="input">
              <a href="#" className="placeholder">
                How can we make you laugh today?
                <img className="img4" src={img4} alt="search" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
