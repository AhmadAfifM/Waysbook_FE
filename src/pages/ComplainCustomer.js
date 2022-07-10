import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import NavsCustomer from "../components/NavsCustomer";
import Chat from "../components/complain/Chat";
const { Content } = Layout;

export default function ComplainCustomer() {
  return (
    <>
      <div className="container">
        <NavsCustomer />
        <div className="complain-admin-pages">
          <div
            style={{
              fontSize: "24px",
              fontWeight: "700",
              paddingBottom: "30px",
            }}
          >
            Complain to Admin
          </div>
          <Content style={{ height: "90vh" }}>
            <Chat />
          </Content>
        </div>
      </div>
    </>
  );
}
