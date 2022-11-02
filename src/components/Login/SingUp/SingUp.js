import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const SingUp = () => {
  const nevigate = useNavigate();
  const nevigateLogin = () => {
    nevigate('/login');
  }

    const handleSingup = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, email, password);
  }

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-2">Please Sing up</h2>
      <form onSubmit={handleSingup}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control name="name" type="name" placeholder="Enter name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login" onClick={nevigateLogin} className="text-primary pe-auto text-decoration-none">
          Please Login
        </Link>{" "}
      </p>
    </div>
  );
};

export default SingUp;
