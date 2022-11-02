import React from "react";
import "./Service.css";
import { Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, description } = service;
  const nevigate = useNavigate();
  const nevigateToChekOut = (service) => {
    nevigate(`/chekOut/${id}`);
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
            onClick={() => nevigateToChekOut(id)}
            type="submit"
            value="Hire a Guide"
          />
        </Card>
      </CardGroup>
    </div>
  );
};

export default Service;
