import React from "react";
import { Button } from "react-bootstrap";
import img1 from "../../../Social/google.png";
import img2 from "../../../Social/git.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.int";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loding/Loading";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    errorElement = (
      <p className="text-center">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div
        style={{ marginLeft: "285px" }}
        className="d-flex align-items-center w-50 "
      >
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
      </div>
      {errorElement}
      <div className="button text-center">
        <Button onClick={() => signInWithGoogle()} variant="primary">
          <img
            className=""
            style={{ width: "25px", margin: "0 2px" }}
            src={img1}
            alt=""
          />
          Google SignIn
        </Button>{" "}
        <br />
        <Button
          onClick={() => signInWithGithub()}
          className="mt-2 mb-2 btn btn-dark "
          variant="primary"
        >
          <img style={{ width: "30px", margin: "0 2px" }} src={img2} alt="" />
          Github SignIn
        </Button>{" "}
      </div>
    </div>
  );
};

export default SocialLogin;
