import React from "react";
import { Row, Col, Layout } from "antd";
import "antd/dist/antd.min.css";
import NavsAdmin from "../components/NavsAdmin";
import Chat from "../components/complain/Chat";
import Contact from "../components/complain/Contact";

const { Content } = Layout;

export default function ComplainAdmin() {
  return (
    <>
      <div className="container" style={{ width: "90vw" }}>
        <NavsAdmin />
        <div className="complain-admin-pages">
          <div
            style={{
              fontSize: "24px",
              fontWeight: "700",
              paddingBottom: "30px",
            }}
          >
            Customer Complain
          </div>
          <Content style={{ height: "90vh" }}>
            <Row>
              <Col md={6} style={{ height: "90vh" }} className="overflow-auto ">
                <Contact />
              </Col>
              <Col
                md={18}
                style={{ height: "90vh" }}
                className="px-1 overflow-auto "
              >
                <Chat fromComplainAdmin={true} />
              </Col>
            </Row>
          </Content>
        </div>
      </div>
    </>
  );
}
