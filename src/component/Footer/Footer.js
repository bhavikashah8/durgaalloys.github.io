import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";


const Footer = () => {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-3 mt-5 ">
        {/* <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div> */}

        {/* <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div> */}
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>DURGA ALLOYS
              </h6>
              <p>
                Durga Alloys makes replacement wear part castings for impact,
                abrasion, and high heat applications in mining, crushing,
                grinding, and shredding, for industrial clients worldwide.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="../Products/CrusherWearParts" className="text-reset">
                  Crusher Wear Parts
                </a>
              </p>
              <p>
                <a href="../Products/ShredderWearParts" className="text-reset">
                  Shredder Wear Parts
                </a>
              </p>
              <p>
                <a href="../Products/MillLinersParts" className="text-reset">
                  Mill Liners
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/CrusherWearParts/JawCrusherPart" className="text-reset">
                  Jaw Crusher Parts
                </a>
              </p>
              <p>
                <a href="/MillLinerParts/ManganeseMillLiners" className="text-reset">
                Manganese Mill Liners
                </a>
              </p>
              <p>
                <a href="/ShredderWearParts/ShredderGrates" className="text-reset">
                  Shredder Grates
                </a>
              </p>
              <p>
                <a href="/CrusherWearParts/ImpactCrusherParts" className="text-reset">
                  Impact Crusher Parts
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Plot No-12A,Knoda Mata Industrial Area Udaipur
                    Kalan,Kishangarh,Rajasthan-305801
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                alloysdurga@gmail.com

              </p>
              <p>
                <i className="fas fa-phone me-3"></i>   +91-8696330311

              </p>
              <p>
                <i class="fa fa-whatsapp" aria-hidden="true"></i> +91-8696330311

              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          durgaalloys.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
