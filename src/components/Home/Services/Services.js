import React, { useEffect, useState } from "react";
import Service from "../../Service/Service";
import "../Services/Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="">
      <div className=" container">
        <h1 className=" title text-center text-primary py-3">
          Create your visions with Me. <br /> Stay on track with your goals
        </h1>
        <div className="row">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
