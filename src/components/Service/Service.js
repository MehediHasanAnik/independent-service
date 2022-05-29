import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, price, img, description } = service;

  const navigate = useNavigate();
  const serviceId = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div id="expert" className=" col-sm-12 col-md-2 col-lg-4">
      <div className="card mb-5">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>Price: ${price}</p>
          <p className="card-text">{description}</p>
          <Button onClick={() => serviceId(id)} className="btn btn-primary">
            Enroll Course
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
