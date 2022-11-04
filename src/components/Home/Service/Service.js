import React from "react";
import "./Service.css";
import { Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, description } = service;
  const nevigate = useNavigate();
  const nevigateToGuideDetails = (id, name) => {
    nevigate(`/guideDetails/${id} ${name}`);
  };
  return (
    <div>
      <CardGroup>
        <Card id="service-card">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="pt-2" style={{"fontWeight": "700","fontSize": "22px"}}>{name}</Card.Title>
            <Card.Text className="pt-2" style={{"color":"gray"}}>{description}</Card.Text>
          </Card.Body>
          <input className="hire-button"
            onClick={() => nevigateToGuideDetails(id, name)}
            type="button"
            value="Hire a Guide"
          />
        </Card>
      </CardGroup>
    </div>
  );
};

export default Service;
