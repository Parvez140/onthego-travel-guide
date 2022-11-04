import React from "react";
import { Button } from "react-bootstrap";
import './SocialLogin.css';
import google from '../../../images/social-icon/google.png';
import github from '../../../images/social-icon/github.png';
import facebook from '../../../images/social-icon/facebook.png';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let errorElement;
  if (error) {    
        errorElement = <p>Error: {error.message}</p>
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <br /><br />
      <div className="social">
        <Button onClick={() => signInWithGoogle()}
         className="social-button"><img src={google} alt="" /></Button>
        <Button className="social-button"><img src={github} alt="" /></Button>
        <Button className="social-button"><img src={facebook} alt="" /></Button>
      </div>
    </div>
  );
};

export default SocialLogin;
