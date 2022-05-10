import React, { useState } from "react";

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
      <a href="/Materials/ManganeseSteel">
      <div className="box btn_shadow ">
      <div className="img">
        <img
          src="https://www.qimingcasting.com/wp-content/uploads/2021/02/Manganese-Steel-Casting.jpg"
          alt=""
          onClick={toggleModal}
        />
      </div>
      <div className="category d_flex">
        <span onClick={toggleModal}>Manganese Steel</span>
        {/*<label>
          <i className='far fa-heart'></i> {props.date}
        </label>*/}
      </div>
      <div className="title">
        <h2 onClick={toggleModal}>
          Durga Alloys manufactures ASTM A128 standard manganese steel wear
          parts for quarrying, mining, and cement wear parts, which products
          include cone crusher liners, jaw crusher liners, mill liner, apron
          feeder pans, hammer mill hammer, and others.
        </h2>
        <a href="#popup" className="arrow" onClick={toggleModal}>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div></a>
      <div className="box btn_shadow ">
        <div className="img">
          <img
            src="https://www.qimingcasting.com/wp-content/uploads/2021/02/Manganese-Steel-Casting.jpg"
            alt=""
            onClick={toggleModal}
          />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>Manganese Steel</span>
          {/*<label>
            <i className='far fa-heart'></i> {props.date}
          </label>*/}
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>
            Durga Alloys manufactures ASTM A128 standard manganese steel wear
            parts for quarrying, mining, and cement wear parts, which products
            include cone crusher liners, jaw crusher liners, mill liner, apron
            feeder pans, hammer mill hammer, and others.
          </h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
