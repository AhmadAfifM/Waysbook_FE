import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.min.css";

import convertRupiah from "rupiah-format";

import dummyBooks from "../../dummyData/DataBooks";

export default function CardAddCart() {
  const [datas] = useState(dummyBooks);
  let navigate = useNavigate();

  const directToDetail = () => {
    navigate("/booksdetail");
  };
  return (
    <>
      <div className="card-books-w-add-cart">
        {datas.map((data, idx) => (
          <Row key={idx} className="cards-w-add-cart">
            <Col>
              <img
                src={data.imgBooks}
                className="img-books-w-add-cart "
                alt=""
              />
            </Col>
            <Col className="d-flex align-items-center ">
              <div className="card-product-w-add-cart text-black ">
                <div className="p-2">
                  <div className="text-header-product-w-add-cart">
                    {data.title.length > 30
                      ? data.title.slice(0, 30) + " ..."
                      : data.title}
                  </div>
                  <div className="text-author">{data.author}</div>
                  <div className="text-desc">
                    "
                    <>
                      {data.desc.length > 60
                        ? data.desc.slice(0, 100) + " ..."
                        : data.desc}
                    </>
                    "
                  </div>
                  <div className="text-product-item">
                    {convertRupiah.convert(data.price)}
                  </div>
                  <Button
                    onClick={directToDetail}
                    className="btn-card-w-add-cart "
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </>
  );
}
// return (
//   <>
//     <div className="card-books-w-add-cart mt-5">
//       <Row className="cards-w-add-cart">
//         <Col span={12}>
//           <img
//             src="https://cdn.storial.co/book_front/55230-06ab1016416d086b79f4d750424341560126c4cb.jpeg"
//             className="img-books-w-add-cart "
//             alt=""
//           />
//         </Col>
//         <Col span={12} className="bg-primary">
//           <div className="card-product-w-add-cart text-black ">
//             <div className="p-2">
//               <div className="text-header-product-w-add-cart">
//                 RENCANA BESAR Untuk Mati Dengan Tenang
//               </div>
//               <div className="text-author">By. Wisnu Suryaning Adji</div>
//               <div className="text-desc">
//                 "Lintang Adriana tak menyangka jika garis hidupnya akan
//                 dimulai mendebarkan semenjak ia .. "
//               </div>
//               <div className="text-product-item">
//                 {convertRupiah.convert("88000")}
//               </div>
//               <Button className="btn-card-w-add-cart ">Add to Cart</Button>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   </>
// );
