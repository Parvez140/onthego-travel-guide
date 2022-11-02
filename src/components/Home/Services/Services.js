import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mt-5 my-5">
      <div className="cards-title">
        <h2>MY SERVICES</h2>
        <p>
          I create incredible tours all throughout Vanice and strive to provide
          excellent service to our customers. At the end of the day, that is as
          complicated ...
        </p>
      </div>
      <div className="cards">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
