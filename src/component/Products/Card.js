import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Header from "../Head/Header";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className="box btn_shadow ">
        <a href="/Products/CrusherWearParts">
          <div className="img">
            <img
              src="https://www.qimingcasting.com/wp-content/uploads/2019/12/JYS-Casting-Crusher-Wear-Parts.jpg"
              alt=""
              onClick={toggleModal}
            />
          </div>

          <div className="title">
            <h2 onClick={toggleModal}><strong>CRUSHER WEAR PARTS</strong></h2>
            <a href="#popup" className="arrow" onClick={toggleModal}>
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="aboutproducts">
            <p>
              Durga Alloys specializes in manufacturing crusher wear parts,
              which include jaw crusher wear parts, cone crusher wear parts,
              hammer mill wear parts, gyratory crusher wear parts, VSI crusher
              wear parts, impact crusher wear parts
            </p>
          </div>
        </a>
      </div>
      <div className="box btn_shadow ">
        <a href="/Products/ShredderWearParts">
          <div className="img">
            <img
              src="https://www.qimingcasting.com/wp-content/uploads/2019/12/JYS-Casting-Shredder-Wear-Parts.jpg"
              alt=""
              onClick={toggleModal}
            />
          </div>

          <div className="title">
            <h2 onClick={toggleModal}><strong>SHREDDER WEAR PARTS</strong></h2>
            <a href="#popup" className="arrow" onClick={toggleModal}>
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="aboutproducts">
            <p>
              Durga Alloys specializes in manufacturing manganese steel and
              alloy steel shredder wear parts, which include shredder hammer,
              shredder grates, shredder caps, shredder anvils, and other wear
              parts
            </p>
          </div>
        </a>
      </div>
      <div className="box btn_shadow ">
        <a href="/Products/MillLinersParts">
          <div className="img">
            <img
              src="https://www.qimingcasting.com/wp-content/uploads/2019/12/JYS-Casting-Mill-Liners.jpg"
              alt=""
              onClick={toggleModal}
            />
          </div>

          <div className="title">
            <h2 onClick={toggleModal}><strong>MILL LINERS</strong></h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="aboutproducts">
            <p>
              Durga Alloys supplies all kinds of mill liners, which include AG
              mill liners, SAG mill liners, ball mill liners, grinding mill
              liners, roll mill liners, and other mill liners",
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Card;
