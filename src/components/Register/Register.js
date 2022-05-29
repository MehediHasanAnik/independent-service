import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase.int";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import Loading from "../Shared/Loding/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error1] = useUpdateProfile(auth);

  const emailRef = useRef("");
  const passRef = useRef("");
  const nameRef = useRef("");

  const navigate = useNavigate();
  const subForm = async (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("updateProfile");
    navigate("/home");
    e.preventDefault();
  };
  if (loading) {
    return <Loading></Loading>;
  }

  const navigateRegister = () => {
    navigate("/register");
  };
  return (
    <div className=" ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-success text-center mt-3">Please Register</h1>
            <Form onSubmit={subForm} className="container w-50">
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  ref={nameRef}
                  type="text"
                  placeholder="Enter Name"
                  required
                />
              </Form.Group>
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
              <Button className="w-100 " variant="success" type="submit">
                Register Now
              </Button>
              <p>
                Already Have An Account?
                <Link
                  to="/login"
                  className="text-danger text-decoration-none"
                  onClick={navigateRegister}
                >
                  Please Login Here
                </Link>
              </p>
            </Form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
