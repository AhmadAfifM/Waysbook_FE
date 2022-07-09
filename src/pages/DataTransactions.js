import React from "react";
import { Table, Tag } from "antd";
import "antd/dist/antd.min.css";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import convertRupiah from "rupiah-format";

import NavsAdmin from "../components/NavsAdmin";

const columns = [
  {
    title: "No",
    dataIndex: "id",
    key: "id",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Users",
    dataIndex: "users",
    key: "users",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Evidance of Transfer",
    dataIndex: "imgPayment",
    key: "imgPayment",
  },
  {
    title: "Product Purchased",
    dataIndex: "productTitle",
    key: "productTitle",
  },
  {
    title: "Total Payment",
    dataIndex: "totalPayment",
    key: "totalPayment",
  },
  {
    title: "Status Payment",
    key: "statusPayment",
    dataIndex: "statusPayment",
    render: (_, { statusPayment }) => (
      <>
        {statusPayment.map((status) => {
          let color = "";
          if (status === "Approve") {
            color = "green";
          }

          if (status === "Pending") {
            color = "yellow";
          }

          if (status === "Cancel") {
            color = "red";
          }

          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const datas = [
  {
    id: 1,
    users: "Debbyidha Apriyanti",
    imgPayment: "bni.jpg",
    productTitle: "Kami Lintang Terus Saya Apa ?",
    totalPayment: <>{convertRupiah.convert("69000")}</>,
    statusPayment: ["Approve"],
  },
  {
    id: 2,
    users: "Azerino Gatit Subriti",
    imgPayment: "bca.jpg",
    productTitle: "Just You and Me Aku Merasa Bahagia",
    totalPayment: <>{convertRupiah.convert("49200")}</>,
    statusPayment: ["Approve"],
  },
  {
    id: 3,
    users: "Bayu Setyi",
    imgPayment: "permata.jpg",
    productTitle: "RENCANA BESAR Untuk Mati Dengan Tenang",
    totalPayment: <>{convertRupiah.convert("88000")}</>,
    statusPayment: ["Pending"],
  },
  {
    id: 4,
    users: "Ahmad Syarifudin",
    imgPayment: "permata.jpg",
    productTitle: "Ayahku adalah ayahnya juga :')",
    totalPayment: <>{convertRupiah.convert("103800")}</>,
    statusPayment: ["Cancel"],
  },
];

export default function DataTranscations() {
  return (
    <>
      <div className="container">
        <NavsAdmin />
        <div className="transaction-pages">
          <div
            style={{
              fontSize: "24px",
              fontWeight: "700",
              paddingBottom: "50px",
            }}
          >
            Incoming Transaction
          </div>
          <Table columns={columns} dataSource={datas} />
        </div>
      </div>
    </>
  );
}
