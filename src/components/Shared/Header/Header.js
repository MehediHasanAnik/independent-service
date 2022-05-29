import { signOut } from "firebase/auth";
import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase.int";
import "../Header/Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <Navbar className="" style={{ backgroundColor: "#5AC292" }} expand="lg">
      <Container>
        <Navbar.Brand className="title" as={Link} to="/">
          <img
            className="w-100"
            style={{ height: "40px" }}
            src={"https://i.ibb.co/PZW1GDX/logo-dark.png"}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Me
            </Nav.Link>

            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            {user ? (
              <button
                className="btn btn-link text-dark text-decoration-none"
                onClick={logout}
              >
                Log Out
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
