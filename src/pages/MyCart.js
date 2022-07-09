import React from "react";
import { Row, Col, Button, Divider } from "antd";
import "antd/dist/antd.min.css";
import "../index.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CardOnMyCart from "../components/card/CardOnMyCart";
import NavsCustomer from "../components/NavsCustomer";

export default function MyCart() {
  let navigate = useNavigate();

  const directToProfile = () => {
    navigate("/profile");
  };

  return (
    <>
      <div className="container">
        <NavsCustomer />
        <div className="mycart-pages">
          <Row style={{ width: "80%" }}>
            <Col span={18}>
              <div style={{ fontSize: "24px", fontWeight: "700" }}>My Cart</div>
              <Row>
                <Col>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "400",
                      marginTop: "20px",
                    }}
                  >
                    Review Your Order
                  </div>
                  <Divider
                    style={{ background: "#393939", marginTop: "5px" }}
                  />
                  <CardOnMyCart />
                  <Divider style={{ background: "#393939" }} />
                </Col>
              </Row>
            </Col>
            <Col span={5} style={{ width: "200px", marginLeft: "20px" }}>
              <div>
                <Divider style={{ background: "#393939", marginTop: "88px" }} />
                <Row>
                  <Col span={18}>
                    <div>
                      <b>Subtotal</b>
                    </div>
                  </Col>
                  <Col>
                    <div>88.000</div>
                  </Col>
                </Row>
                <Row>
                  <Col span={18}>
                    <div>
                      <b>Qty</b>
                    </div>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "right", width: "50px" }}>1</div>
                  </Col>
                </Row>
                <Divider
                  style={{ background: "#393939", marginBottom: "10px" }}
                />
                <Row>
                  <Col span={18}>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "800",
                        color: "#44B200",
                      }}
                    >
                      Total
                    </div>
                  </Col>
                  <Col>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "800",
                        color: "#44B200",
                      }}
                    >
                      88.000
                    </div>
                  </Col>
                </Row>

                <Button onClick={directToProfile} className="btn-pay">
                  Pay
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
