import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Col, Row } from "antd";
import "antd/dist/antd.min.css";

import convertRupiah from "rupiah-format";

import dummyBooks from "../../dummyData/DataBooks";

export default function CardBooks({ fromProfile = false }) {
  const [datas] = useState(dummyBooks);

  return (
    <>
      <div className="card-books">
        <Row className="d-flex flex-column">
          <Col className="d-flex flex-row">
            {datas.map((data, idx) => (
              <Nav.Link key={idx}>
                <div className="card-product mt-2 text-black text-wrap">
                  <img src={data.imgBooks} className="img-books" alt="" />
                  <div className="p-2">
                    <div className="text-header-product-item">
                      {data.title.length > 50
                        ? data.title.slice(0, 50) + " ..."
                        : data.title}
                    </div>
                    <div className="text-author">{data.author}</div>
                    <div className="text-product-item">
                      {convertRupiah.convert(data.price)}
                    </div>
                  </div>
                  {fromProfile ? (
                    <Button
                      style={{
                        width: "100%",
                        background: "#393939",
                        color: "white",
                      }}
                    >
                      Download
                    </Button>
                  ) : null}
                </div>
              </Nav.Link>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
}
