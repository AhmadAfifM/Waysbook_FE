import React from "react";
import { Row, Col, Carousel } from "antd";
import "antd/dist/antd.min.css";
import "../index.css";
// import CardBooks from "../components/card/CardBooks";

import "bootstrap/dist/css/bootstrap.min.css";

import CardBooks from "../components/card/CardBooks";
import CardAddCart from "../components/card/CardAddCart";
import NavsAuth from "../components/NavsAuth";

export default function Home() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <div className="container-fluid">
        <NavsAuth />
        <Row>
          <Col style={{ width: "100%" }}>
            <div className="text-in-home">
              <p>With us, you can shop online & help</p>
              <p>save your high street at the same time</p>
            </div>
          </Col>
          <Col>
            <Carousel
              autoplay
              autoplaySpeed={10000}
              style={{ paddingBottom: "60px" }}
              afterChange={onChange}
            >
              <div>
                <CardAddCart className="contentStyle" />
              </div>
              <div>
                <CardAddCart className="contentStyle" />
              </div>
              <div>
                <CardAddCart className="contentStyle" />
              </div>
              <div>
                <CardAddCart className="contentStyle" />
              </div>
            </Carousel>
          </Col>
          <Col>
            <Row className="d-flex flex-column ms-5">
              <Col>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "700",
                    paddingLeft: "70px",
                    marginTop: "20px",
                  }}
                >
                  List Books
                </div>
              </Col>
              <Col>
                <CardBooks />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
