import React from "react";

import "./InfoSectin.css";

const InfoSection = () => {
  return (
    <div className="main-section py-5">
      <div className="container">
        <div className="header text-center mb-5">
          <h1>Start your journey with Me!</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="consulting-section mt-5">
              <h1 className="mb-3 ">Get help now!</h1>
              <p className="mb-5">
                This Program uses the Center's convening power to bring together
                health leaders and organizations to discuss important public
                policy issues facing mental health and substance use care
                systems nationwide and at the state level. In addition, the
                Mental Health Program is part of an international effort to
                reduce stigma and discrimination against people living with
                mental health and substance use conditions.
              </p>

              <a
                className="btn btn-primary"
                href="https://github.com/marshallanique"
              >
                SCHEDULE A SESSION
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image">
              <img
                src={"https://i.ibb.co/NjnGqvP/pexels-cottonbro-4101143-1.jpg"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
