import React from "react";
import { Avatar, Image, Row, Col, Divider } from "antd";

export default function Contact() {
  return (
    <>
      <div className=" container-fluid" style={{ height: "50vh" }}>
        <div className="header-message-customer d-flex align-items-start">
          <Row
            className="d-flex align-items-center ms-1"
            style={{ width: "14vw" }}
          >
            <Col>
              <Avatar
                className="bg-secondary me-2 img-chat"
                src={
                  <Image
                    src="https://joeschmoe.io/api/v1/random"
                    style={{ width: 35 }}
                  />
                }
              />
            </Col>
            <Col>
              <div className="text-message-customer">Debby Idha</div>
            </Col>
            <Divider className="divider-message-customer" />
          </Row>
          <Row
            className="d-flex align-items-center ms-1"
            style={{ minWidth: "14vw" }}
          >
            <Col>
              <Avatar
                className="bg-secondary me-2 img-chat"
                src={
                  <Image
                    src="https://joeschmoe.io/api/v1/random"
                    style={{ width: 35 }}
                  />
                }
              />
            </Col>
            <Col>
              <div className="text-message-customer">Azerino Yoga</div>
            </Col>
            <Divider className="divider-message-customer" />
          </Row>
          <Row
            className="d-flex align-items-center ms-1"
            style={{ minWidth: "14vw" }}
          >
            <Col>
              <Avatar
                className="bg-secondary me-2 img-chat"
                src={
                  <Image
                    src="https://joeschmoe.io/api/v1/random"
                    style={{ width: 35 }}
                  />
                }
              />
            </Col>
            <Col>
              <div className="text-message-customer">Bayu Setyo</div>
            </Col>
            <Divider className="divider-message-customer" />
          </Row>
        </div>
      </div>
    </>
  );
}
