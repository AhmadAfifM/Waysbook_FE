import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, message } from "antd";
import "antd/dist/antd.min.css";
import "../index.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import convertRupiah from "rupiah-format";

import NavsCustomer from "../components/NavsCustomer";

export default function BooksDetail() {
  let navigate = useNavigate();

  const success = () => {
    <>
      <div className="d-flex justify-content-center align-items-center">
        {message.success(
          <>
            The product is <b> successfully </b> added to the cart
          </>,
          3
        )}
      </div>
    </>;
  };

  const directToCart = () => {
    success();
    navigate("/mycart");
  };

  return (
    <div
      className="container justify-content-center d-flex flex-column "
      style={{ minHeight: "75vh" }}
    >
      <NavsCustomer />
      <Row className="thumb-detail justify-content-center">
        <Col
          span={8}
          className=" d-flex justify-content-end pe-3"
          style={{ width: "200vh" }}
        >
          <img
            src="https://cdn.storial.co/book_front/24607-a32824016bd812330cb1942b83be2c11030428cd.jpeg"
            alt=""
            className="books-detail"
            style={{ width: "400px", height: "550px", borderRadius: "6px" }}
          ></img>
        </Col>
        <Col span={8} className=" ps-3">
          <Col>
            <div className="title-books-detail">
              Kami Lintang Terus Saya Apa ?
            </div>
            <div
              style={{
                fontSize: "20px",
                color: "#929292",
                fontWeight: "400",
                fontStyle: "italic",
                paddingTop: "10px",
              }}
            >
              By. Yunita R Saragi
            </div>
          </Col>
          <Col className="pt-5">
            <div className="title-detail">Publication Data</div>
            <div className="sub-title-detail">August 2018</div>
          </Col>
          <Col className="pt-4">
            <div className="title-detail">Pages</div>
            <div className="sub-title-detail">264</div>
          </Col>
          <Col className="pt-4">
            <div className="title-detail text-danger">ISBN</div>
            <div className="sub-title-detail">180536633104</div>
          </Col>
          <Col className="pt-4">
            <div className="title-detail">Price</div>
            <div
              className="sub-title-detail"
              style={{ color: "#44B200", fontWeight: "600" }}
            >
              {convertRupiah.convert(49300)}
            </div>
          </Col>
        </Col>
      </Row>
      <Row className="about-pages justify-content-center d-flex">
        <Col span={16} className=" ">
          <div className="container">
            <div className="title-about">About This Book</div>

            <div className="content-about" style={{ textAlign: "justify" }}>
              Hidupku bedebah. Maka terkadang tanpa sengaja aku sering melakukan
              semacam improvisasi. Biar semua kayak baik-baik saja. Baik-baik
              saja? Apa sebenarnya arti kata-kata itu? Baik dan nggak baik,
              keduanya acapkali bertukar posisi. Seperti sebuah benda pengecoh
              optik. Kau lihat dari kanan, itu hanya satu segitiga. Kau putar ke
              arah berbeda ternyata dua segitiga. Satu segitiga atau dua
              segitiga? Atau sama sekali bukan segitiga. Sebenarnya, aku punya
              banyak teman. Lalu apa yang harus aku khawatirkan? Meredith, Jaka,
              Bunda Retno, Civa, Felixia, Sylia, Adrik, juga Paman Weirdo. Tentu
              nggak ada yang dikhawatirkan kalau mereka itu orang-orang biasa.
              Bukan berupa potongan identitas di dalam kepalamu....
            </div>
          </div>
        </Col>
      </Row>
      <Row className="button-pages justify-content-center d-flex  pt-2">
        <Col span={16} className="d-flex justify-content-end ">
          <Button
            onClick={directToCart}
            className="btn-addcart d-flex align-items-center justify-content-center"
            type="primary"
          >
            Add Cart
            <ShoppingCartOutlined style={{ fontSize: "20px" }} />
          </Button>
        </Col>
      </Row>
    </div>
  );
}
