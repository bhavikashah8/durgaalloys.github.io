import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import contact1 from "./contact1.png";
import Capture from "../pic/Capture.PNG";

import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Are you sure?`);
    emailjs
      .sendForm(
        "service_6g3l2qd",
        "template_n7k31zp",
        form.current,
        "dLPIUlp-6fWccmpnI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  // const formSubmit = (event) => {
  //   event.preventDefault();
  //   alert(
  // //     `My name is ${data.fullname}.
  // // My phone number is ${data.phone}.
  // // My email address is ${data.email}.
  // // My Subject on  ${data.subject}.
  // // Here is my message I want to say : ${data.message}.
  // // `
  // `Sure want to submit?`
  //   );
  // };
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            {/* <h4>CONTACT</h4> */}
            <h1>GET IN TOUCH</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <h4>LOCATE US</h4>
                <div className="img">
                  <a href="https://www.google.com/maps/place/26%C2%B029'03.4%22N+74%C2%B049'18.3%22E/@26.4844753,74.8220591,16.71z/data=!4m5!3m4!1s0x0:0xc1593db1026b96ad!8m2!3d26.4842667!4d74.82175?hl=en">
                    <img src={Capture} alt="" />
                  </a>
                </div>
                <div className="details">
                  <h1>DURGA ALLOYS</h1>

                  <p>Have any question ? We'd love to hear from you</p>
                  
                  <span>FIND US ON</span>
                  <div className="button f_flex">
                    <button className="btn_shadow">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-linkedin"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-twitter"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form ref={form} onSubmit={handleSubmit}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="user_name"
                      value={data.user_name}
                      onChange={InputEvent}
                      required
                    />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                      required
                    />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL </span>
                  <input
                    type="email"
                    name="user_email"
                    value={data.user_email}
                    onChange={InputEvent}
                    required
                  />
                </div>
                <div className="input">
                  <span>SUBJECT </span>
                  <input
                    type="text"
                    name="user_subject"
                    value={data.user_subject}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                    required
                  ></textarea>
                </div>
                <button className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
