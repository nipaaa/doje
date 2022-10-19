import React from "react";
import expart1 from "../../assets/section/expert3.png";
import expart2 from "../../assets/section/expert1.png";
import Gallary from "./Gallary";
import arrow from "../../assets/icon/arrow.svg"
import Footer from "../Shared/Footer";

const Expart = () => {
  const allButton = [
    {
      name: "Original Sound",
    },
    {
      name: "Beat & Hook",
    },
    {
      name: "Question on Industry",
    },
    {
      name: "Performance",
    },
    {
      name: "Performance",
    },
    {
      name: "Portrait",
    },
    {
      name: "Guiter Play",
    },
    {
      name: "Self-introduction",
    },
    {
      name: "Personal Video Feedback",
    },
    {
      name: "Co-Writing",
    },
    {
      name: "Co-Writing",
    },
  ];
  return (
 <div>
     <div className="container">
      <div className="row g-5">
        <div className="col-lg-4 col-sm-12">
          <img className="img-fluid" src={expart1} alt="" />
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="d-flex border-bottom border-dark">
            <div className="me-3">
              <img className="rounded-circle" src={expart2} alt="" />
            </div>
            <div>
              <h5>JAY PARK</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod, Lorem ipsum dolor sit amet, consectetur a, sed do
                eiusmod, Lorem ipsum dolor
              </p>
            </div>
          </div>
          <div>
            <h2>SONGHEE HYUN'S MUSIC CLASS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod, consectetur adipisicing elit, sed do eiusmod
            </p>
          </div>
          <div className="my-5">
            <div>
              <h5>What to send:</h5>
              <div className="container d-flex flex-wrap mb-3">
                {allButton.slice(0, 8).map((singleButton, index) => (
                  <button
                    key={index}
                    type="button"
                    class="btn btn-outline-dark rounded-pill px-3 me-1 mb-3"
                  >
                    {singleButton.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h5>What to receive:</h5>
              <div className="container d-flex flex-wrap">
                {allButton.slice(8, 12).map((singleButton, index) => (
                  <button
                    key={index}
                    type="button"
                    class="btn btn-outline-dark rounded-pill px-3 me-1 mb-3"
                  >
                    {singleButton.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div class="d-grid">
            <button class="btn btn-dark rounded-pill fw-bolder" type="button">
              Get Feedback <img src={arrow} alt="" />
            </button>
          </div>
        
        </div>
      </div>
    
    
    </div>
      <div className="footer">
      <Gallary/>
      <Footer/>
      </div>
 </div>
  );
};

export default Expart;
