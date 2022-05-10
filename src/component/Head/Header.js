import React, { useState } from "react";
import "./header.css";
import logo from "../pic/logo.png";

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  // Toogle Menu
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
            <span><strong>durgaalloys</strong></span>
          </div>

          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href="/">home</a>
              </li>

              <li>
                {/* <a href="#products">products</a> */}

                <div class="dropdown">
                  <a href="#products" class="dropbtn">
                    PRODUCTS
                  </a>
                  <div class="dropdown-contents">
                    <div className="parts">
                      <a href="/Products/CrusherWearParts">
                        <li>
                          <strong>CRUSHER WEAR PARTS</strong>
                        </li>
                      </a>
                      <a href="/CrusherWearParts/JawCrusherPart">
                        <li>Jaw crusher Parts</li>
                      </a>
                      <a href="/CrusherWearParts/ConeCrusherParts">
                        <li>Cone crusher Parts</li>
                      </a>
                      <a href="/CrusherWearParts/ImpactCrusherParts">
                        <li>Impact crusher Parts</li>
                      </a>
                      <a href="/CrusherWearParts/GyratoryCrusherParts">
                        <li>Gyratory crusher Parts</li>
                      </a>
                      <a href="/CrusherWearParts/VsiCrusherPartst">
                        <li>Vsi crusher Parts</li>
                      </a>
                    </div>
                    <div className="parts">
                      <a href="/Products/ShredderWearParts">
                        <li>
                          <strong>SHREDDER WEAR PARTS</strong>
                        </li>
                      </a>
                      <a href="/ShredderWearParts/ShredderGrates">
                        <li>Shredder Grates</li>
                      </a>
                      <a href="/ShredderWearParts/ShredderHammers">
                        <li>Shredder Hammers</li>
                      </a>
                      <a href="/ShredderWearParts/ShredderRotor">
                        <li>Shredder Rotor</li>
                      </a>
                    </div>
                    <div className="parts">
                      <a href="/Products/MillLinersParts">
                        <li>
                          <strong>MILL LINERS PARTS</strong>
                        </li>
                      </a>
                      <a href="/MillLinerParts/BallMillLiners">
                        <li>Ball Mill Liners</li>
                      </a>
                      <a href="/MillLinerParts/CrMoAlloyMillLiners">
                        <li>Cr Mo Alloy Mill Liners</li>
                      </a>
                      <a href="/MillLinerParts/ManganeseMillLiners">
                        <li>Manganese Mill Liners</li>
                      </a>
                      <a href="/MillLinerParts/RollMillLiners">
                        <li>Roll Mill Liners</li>
                      </a>

                      <a href="/MillLinerParts/RubberMillLiners">
                        <li>Rubber Mill Liners</li>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="dropdown">
                  <a href="#materials" class="dropbtn">
                    CAST MATERIALS
                  </a>
                  <div class="dropdown-content">
                    <a href="/Materials/ManganeseSteel">
                      <strong>MANGANESE STEEL</strong>
                    </a>
                    <a href="/Materials/ManganeseSteel">
                      <strong>MS STEEL</strong>
                    </a>
                  </div>
                </div>

                {/* <div className="navlist">
                <a href="#materials">cast materials</a>
                <ul>
                  <a href=""><li>More1</li></a> 
                  <a href=""><li>More1</li></a> 

                  <a href=""><li>More1</li></a> 
                </ul>
                </div> */}
              </li>
              <li>
                <a href="#clients">why us?</a>
              </li>

              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
