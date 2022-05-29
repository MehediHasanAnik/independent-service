import React from "react";
import "../About/About.css";
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="about-me">
          <h1 className="title text-center mt-5 text-primary">About Myself</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="about-image">
                <img
                  className="image w-50 "
                  src={
                    "https://i.ibb.co/zbhGsqN/278135649-523351972714341-7545329329003806279-n.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="myself">
                <h1>My Ambitions</h1>
                <p>
                  I want to be a Full Stack Developer at the end of the year. I
                  am trying hard and soul to achieve that goal. I'm facing many
                  obstacles to learning web development. But I'm not giving up
                  untill I reach my destination. I will put all dedications in
                  it & hopelly will become a fullStack Developer Soon. Keep me
                  in your prayers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
