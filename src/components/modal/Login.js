import { Modal, Nav } from "react-bootstrap";
import { Input, Form, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
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
            <Form.Item>
              <Input
                style={{
                  backgroundColor: "#FFF",
                  border: "2px solid #BCBCBC",
                  color: "#333333",
                  width: "350px",
                  height: "50px",
                  borderRadius: "5px",
                }}
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item>
              <Input.Password
                style={{
                  backgroundColor: "#FFF",
                  border: "2px solid #BCBCBC",
                  color: "#333333",
                  width: "350px",
                  height: "50px",
                  borderRadius: "5px",
                }}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                placeholder="Password"
              />
            </Form.Item>
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
