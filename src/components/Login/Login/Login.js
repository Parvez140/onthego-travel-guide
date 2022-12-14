// import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateSingup = () => {
    navigate("/singup");
  };
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center mt-2" style={{"color":"#29B2B8"}}>Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      <p>
        New to Genius Car?
        <Link
          to="/singup"
          onClick={navigateSingup}
          className="text-primary pe-auto text-decoration-none"
        >
          Please Sing up
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Login;
