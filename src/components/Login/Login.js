import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.int";
import Loading from "../Shared/Loding/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";

import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // let errorElement;
  const subForm = (e) => {
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email, password);
    e.preventDefault();
  };
  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (error?.message) {
    toast("User Not Found");
  }
  const navigateRegister = () => {
    navigate("/register");
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email Sent To Your Address");
    } else {
      toast("Please Enter Your Email Address");
    }
  };

  // if (error) {
  //   errorElement = <p className="text-center">Error: {error?.message}</p>;
  // }

  return (
    <div className="login-form">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-primary text-center mt-3">Please Login</h1>
            <Form onSubmit={subForm} className="container w-50">
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  ref={emailRef}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={passRef}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button className="w-100 " variant="primary" type="submit">
                Log In
              </Button>
              <p className="mt-3">
                New here?{" "}
                <Link
                  to="/register"
                  className="text-danger text-decoration-none"
                  onClick={navigateRegister}
                >
                  Please Register Here.
                </Link>
              </p>
              <p>
                <span className=""> Forget Your Password?</span>
                <Button
                  className="btn btn-link text-white text-decoration-none "
                  onClick={resetPassword}
                >
                  Reset Password
                </Button>
              </p>
            </Form>
            {/* {errorElement} */}
            <SocialLogin></SocialLogin>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
