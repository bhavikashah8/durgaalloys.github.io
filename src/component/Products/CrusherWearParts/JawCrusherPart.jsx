import React from "react";

import "../Products.css";
import Cseries from "../../pic/Cseries.PNG";
import c6x from "../../pic/c6x.PNG";
import peseries from "../../pic/peseries.PNG";



const JawCrusherPart = () => {
  return (
    <>
      <div className="main">
      
        <section className="crusher">
          <div className="crusherContent">
            <div className="subProduct">
              <div className="left">
                <img
                  src= {Cseries}
                  alt=""
                />
                <img
                  src={c6x}
                  alt=""
                />
                <img
                  src={peseries}
                  alt=""
                />
              </div>
            </div>
            <h4>Jaw Crusher Parts By Durga Alloys</h4>
            <p>
              When it comes to jaw crusher parts, Durga Alloys has been
              crushing the market for decades. If you demand the peace of mind
              that comes with ISO 9001-certified, fully-guaranteed, and
              warranted replacement parts for your jaw crusher. Durga Alloys
              can supply jaw crusher parts with the best quality and suitable
              price.
            </p>
            <p>We supply the following wear parts for jaw crusher:</p>

            <p>
              <ul>
                <li>Fixed and Swing Dies</li>
                <li>Cheek Plates</li>
                <li>Wedges</li>
              </ul>
            </p>
            <p>
              On the other hand, Durga Alloys also supplies high-quality
              crusher spare parts. Under our engineer’s hard work, our
              aftermarket replacement spare parts beyond OEM spare parts
              quality.
            </p>
          </div>

          <div className="crusherContent">
            <p>
              Durga Alloys® premium manganese steel that has been developed from
              the original Hadfield’s manganese steel specification, our
              variation can provide unequaled toughness with excellent
              resistance to abrasion, which improves as the steelwork hardens in
              operation. Available in our M14, M18, and M21 material grades we
              have a cost-effective solution to your specific requirements.
            </p>
            <p>
              On the other hand, Durga Alloys’s engineers have researched some
              patent material to improve crusher wear parts span life. Such as,
              TIC inserts wear parts in crushing hard stone (1.5-3 times than
              manganese steel); Mircoalloy steel wear parts in crushing copper
              mine(1.5-2 times than manganese steel); Alloy steel wear parts in
              mineral separation…
            </p>
            <p>
              Durga Alloys is a super-foundry for your crushers. All Durga
              Alloys crusher replacement parts are backed by ISO9001:2015
              quality control system and are shipped only after meeting our
              rigorous quality standards. We are committed to meeting your
              replacement parts needs in a professional and efficient manner.
              Our Customer Support Department is ready to help you with a quote,
              to check inventory, or simply answer a technical question. Talk to
              your Durga Alloys professional today about your specific needs!
            </p>
          </div>

          <div className="below"></div>
        </section>
        
      </div>
    </>
  );
};

export default JawCrusherPart;
