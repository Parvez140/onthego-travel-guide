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
    <div className="">
      <CardGroup className="card">
        <Card className="p-2">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <input
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
