import React, { useState } from "react";
import "../index.css";
import { Navbar, Container, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import imgWaysBook from "../assets/logos.png";

// IMPORT MODAL LOGIN & REGISTER
import Login from "./modal/Login";
import Register from "./modal/Register";

export default function NavsAuth() {
  //FOR LOGIN MODAL
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  // FOR REGISTER MODAL
  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  let navigate = useNavigate();

  const directToHome = () => {
    navigate("/home");
  };
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Image
            onClick={directToHome}
            src={imgWaysBook}
            className="img-fluid pt-1"
            style={{ width: "111px", height: "65px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button
              variant="outline-secondary"
              className="login-btn "
              onClick={() => {
                handleShowLogin();
              }}
            >
              Login
            </Button>
            <Button
              className="register-btn ms-5"
              onClick={() => {
                handleShowRegister();
              }}
            >
              Register
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      <Login
        showLogin={showLogin}
        handleCloseLogin={handleCloseLogin}
        handleShowRegister={handleShowRegister}
      />
      <Register
        showRegister={showRegister}
        handleCloseRegister={handleCloseRegister}
        handleShowLogin={handleShowLogin}
      />
    </Navbar>
  );
}
