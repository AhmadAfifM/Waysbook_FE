import React from "react";
import { Row, Col, Button, Image } from "antd";
import "antd/dist/antd.min.css";
import "../index.css";
import CardBooks from "../components/card/CardBooks";
import {
  MailOutlined,
  UserOutlined,
  PhoneOutlined,
  AimOutlined,
} from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import NavsCustomer from "../components/NavsCustomer";

export default function Profile() {
  return (
    <>
      <div className="container d-flex justify-content-center  flex-column">
        <NavsCustomer />
        <div className="d-flex flex-column align-items-center ">
          <Row className="w-100">
            <Col span={10}>
              <div
                style={{
                  fontWeight: "700",
                  fontSize: "36px",
                  marginLeft: "60px",
                }}
              >
                Profile
              </div>
            </Col>
          </Row>
          <Row className="card-profile">
            <Col span={24}>
              <Row>
                <Col span={19} style={{ paddingTop: "15px" }}>
                  <Row className="d-flex align-items-center mb-3 ms-3">
                    <Col>
                      <MailOutlined style={{ fontSize: "25px" }} />
                    </Col>
                    <Col className="ms-3">
                      <div className="text-profile-atas">
                        debbyidha@gmail.com
                      </div>
                      <div className="text-profile-bawah">Email</div>
                    </Col>
                  </Row>
                  <Row className="d-flex align-items-center mb-3 ms-3">
                    <Col>
                      <UserOutlined style={{ fontSize: "25px" }} />
                    </Col>
                    <Col className="ms-3">
                      <div className="text-profile-atas">Male</div>
                      <div className="text-profile-bawah">Gender</div>
                    </Col>
                  </Row>
                  <Row className="d-flex align-items-center mb-3 ms-3">
                    <Col>
                      <PhoneOutlined style={{ fontSize: "25px" }} />
                    </Col>
                    <Col className="ms-3">
                      <div className="text-profile-atas">0822-3492-5007</div>
                      <div className="text-profile-bawah">Phone Number</div>
                    </Col>
                  </Row>
                  <Row className="d-flex align-items-center mb-3 ms-3">
                    <Col>
                      <AimOutlined style={{ fontSize: "25px" }} />
                    </Col>
                    <Col className="ms-3">
                      <div className="text-profile-atas">
                        Perumahan Permata Jingga Exclusive G4
                      </div>
                      <div className="text-profile-bawah">Address</div>
                    </Col>
                  </Row>
                </Col>
                <Col
                  span={5}
                  className="d-flex flex-column justify-content-center align-items-center  w-100"
                >
                  <div>
                    <Image
                      style={{
                        borderRadius: "5px",
                        width: "226.67px",
                        height: "202px",
                      }}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                  </div>
                  <div>
                    <Button className="btn-change-profile">
                      Change Profile
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="w-100">
            <Col span={18}>
              <div
                style={{
                  fontWeight: "700",
                  fontSize: "36px",
                  marginLeft: "60px",
                }}
              >
                My Books
              </div>
            </Col>
          </Row>
          <Row className=" w-75 mb-5 d-flex justify-content-center">
            <Col span={18}>
              <CardBooks fromProfile={true} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
