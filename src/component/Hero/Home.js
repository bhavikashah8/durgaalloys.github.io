import React from "react";
import "./Home.css";
import logo from "../pic/DURGA.png";
import manganese from "../pic/manganese.jpg";

// import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        {/* <img className="manganese" src={manganese} alt="" /> */}

        <div className="homecontent">
          <img className="logo" src={logo} alt="" />
          <h1>DURGA ALLOYS</h1>
          <p>Manganese | Mild Steel</p>
        </div>
        <div className="about">
          <p>
            <span >
              <strong>
            Durga Alloys makes replacement wear part castings for impact,
            abrasion, and high heat applications in mining, crushing, grinding,
            and shredding, for industrial clients worldwide.
            </strong>
            </span>
          </p>
          <p>
            
            Durga Alloys is a dynamically growing company with many years of
            experience in production and supply <strong>Crusher Wear Parts, Shredder
            Wear Parts, Mill Liners, Apron Feeder Pans, Electric Rope Shovel
            Parts,</strong> and <strong>Crusher Spare Parts</strong>. We supply wear parts to the USA,
            Canada, Europe, Australia, Africa, etc.
          </p>
          <p>
            As a casting foundry, Durga Alloys supplies wear parts for the
            industry by manganese steel, chromium steel, alloy steel, and other
            customized materials.
          </p>
          <p>
            
            Durga Alloys designs and manufactures world-class wear part
            solutions that last longer than OEM parts. Using the latest
            technology, we design and cast our products from the best quality
            alloys available, and use custom heat treatments to ensure the
            durability of our parts. Our huge product range, customer service
            excellence, and our ability to deliver on time, every time is the
            result of 30+ years of operation and industry-based knowledge – we
            know what you need, so we deliver it.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;

