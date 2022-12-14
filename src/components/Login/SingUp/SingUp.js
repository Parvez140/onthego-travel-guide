import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";


const SingUp = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
  ] = useCreateUserWithEmailAndPassword(auth);


  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate('/login');
  }

    const handleSingup = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  }
  if(user){
    navigate('/home');
  }
  if (loading) {
    return <Loading/>
  }


  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center mt-2" style={{"color":"#29B2B8"}}>Please Sing up</h2>
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
        Already have an account?
        <Link to="/login" onClick={navigateLogin} className="text-primary pe-auto text-decoration-none">
          Please Login
        </Link>
      </p>
      <SocialLogin/>
    </div>
  );
};

export default SingUp;
