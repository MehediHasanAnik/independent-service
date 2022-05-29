import React from "react";
import "../Banner/Banner.css";
const Banner = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="whole-container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="banner-content">
                <h1>
                  Great change <br /> requires support
                </h1>
                <p className="life-text">Live a life with a passion</p>
                <p className="life-desp ">
                  To get an all-round exposure to life, take out five days not
                  too many just five days. There is something to learn from
                  everyone's lives. Stay safe and meditate. Slow down & cool
                  down.
                </p>

                <a
                  className="btn btn-primary px-5 py-2"
                  href="https://www.habitsforwellbeing.com/22-ways-practice-emotional-self-care-letting-go/"
                >
                  SCHEDULE A SESSION
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image-container">
                <img
                  className="mr-4"
                  src={"https://i.ibb.co/3rN79NC/Banner2-removebg-preview.png"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
