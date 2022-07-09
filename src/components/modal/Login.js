import { Modal, Button, Form, Nav } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";

export default function Login({
  showLogin,
  handleShowRegister,
  handleCloseLogin,
}) {
  const handleRedirectRegister = () => {
    handleCloseLogin();
    handleShowRegister();
  };
  return (
    <>
      <Modal show={showLogin} onHide={handleCloseLogin} centered>
        <Modal.Title
          className="mt-3 ms-5"
          style={{ padding: "20px", fontWeight: "700", fontSize: "40px" }}
        >
          Login
        </Modal.Title>

        <Modal.Body className="d-flex flex-column align-items-center">
          <Form>
            <Form.Group>
              <Form.Control
                className="mt-3"
                style={{
                  backgroundColor: "#D2D2D2",
                  border: "2px solid #BCBCBC ",
                  width: "350px",
                  height: "50px",
                }}
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className="pt-3">
              <Form.Control
                style={{
                  backgroundColor: "#D2D2D2",
                  border: "2px solid #BCBCBC ",
                  width: "350px",
                  height: "50px",
                }}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Form>

          <Button
            className="mt-5 text-white"
            style={{
              backgroundColor: "#393939",
              width: "350px",
              height: "50px",
              fontWeight: "800",
              border: "2px solid #393939",
            }}
            onClick={handleCloseLogin}
          >
            Login
          </Button>
          <div
            onClick={() => {
              handleRedirectRegister();
            }}
            className="mt-2"
          >
            <Nav.Link style={{ color: "black" }}>
              Dont't have an account ? klik <b>Here</b>
            </Nav.Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
