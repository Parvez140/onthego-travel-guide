import React from "react";
import './SocialLogin.css';
import google from '../../../images/social-icon/google.png';
import github from '../../../images/social-icon/github.png';
import facebook from '../../../images/social-icon/facebook.png';
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  let errorElement;
  if (error || error1) {    
        errorElement = <p className="text-danger text-center">Error: {error?.message} {error1?.message}</p>
  }
  if (loading || loading1) {
    return <p className="text-center">Loading...</p>;
  }
  if (user || user1) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px","backgroundColor":"#29B2B8" }} className="w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px","backgroundColor":"#29B2B8" }} className="w-50"></div>
      </div>
      {errorElement}
      <br /><br />
      <div className="social">
        <button onClick={() => signInWithGoogle()}
         className="social-button"><img src={google} alt="" /></button>
        <button onClick={() => signInWithGithub()}
         className="social-button"><img src={github} alt="" /></button>
        <button className="social-button" disabled><img src={facebook} alt="" /></button>
      </div>
    </div>
  );
};

export default SocialLogin;
