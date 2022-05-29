import React from "react";

import "../Checkout/Checkout.css";
const Checkout = () => {
  return (
    <div className="my-services py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="">
              <img
                src={"https://i.ibb.co/mbYy4wq/pexels-cottonbro-4100424.jpg"}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="consulting-section mt-5">
              <h1 className="mb-3 ">Get help now!</h1>
              <p className="mb-5">
                Mental health refers to cognitive, behavioral, and emotional
                well-being. It is all about how people think, feel, and behave.
                People sometimes use the term “mental health” to mean the
                absence of a mental disorder. Mental health can affect daily
                living, relationships, and physical health.!
              </p>

              <a
                className="btn btn-primary "
                href="https://www.habitsforwellbeing.com/22-ways-practice-emotional-self-care-letting-go/"
              >
                SCHEDULE A SESSION
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
