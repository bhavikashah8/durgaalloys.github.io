import React from "react";

import "../Products.css";


import vsiseries from "../../pic/vsiseries.PNG";
import vsi6x from "../../pic/vsi6x.PNG";
import vsi5x from "../../pic/vsi5x.PNG";


const VsiCrusherParts = () => {
  return (
    <>
      <div className="main">

        <section className="crusher">
          <div className="crusherContent">
            <div className="subProduct">
              <div className="left">
                <img
                  src= {vsi5x}
                  alt=""
                />
                <img
                  src={vsi6x}
                  alt=""
                />
                <img
                  src={vsiseries}
                  alt=""
                />
              </div>
            </div>
            <h4>VSI Crusher Parts By Durga Alloys</h4>
            <p>
              When it comes to VSI crusher parts, Durga Alloys manufactures
              crusher wear parts for popular brand VSI crushers, including rotor
              tips, back-up set, distributor plate, feed tube, tip wear plates,
              and cavity wear plates. As a rich experience foundry, Qiming
              Casting has new designs for those VSI crushers, which quality
              better than OEM replacement parts.
            </p>
            <p>
              On the other hand, Durga Alloys is a superstock for popular
              brands VSI crushers. All Durga Alloys VSI replacement parts are
              backed by ISO9001:2015 quality control system and are shipped only
              after meeting our rigorous quality standards. We are committed to
              meeting your replacement parts needs in a professional and
              efficient manner. Our Customer Support Department is ready to help
              you with a quote, to check inventory, or simply answer a technical
              question. Talk to your Durga Alloys professional today about
              your specific needs!
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

export default VsiCrusherParts;
