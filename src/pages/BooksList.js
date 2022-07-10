import React, { useState } from "react";
import { Table, Space, Tag, Empty, Modal } from "antd";
import "antd/dist/antd.min.css";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavsAdmin from "../components/NavsAdmin";
import dataBooks from "../dummyData/DataBooks";

import ShowMoreText from "react-show-more-text";

import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import EditBooksProduct from "../components/modal/EditBooksProduct";
const { confirm } = Modal;
export default function BooksList() {
  // FOR EDIT PTODUCT MODAL
  const [showEditBooks, setShowEditBooks] = useState(false);
  const handleCloseEditBooks = () => setShowEditBooks(false);
  const handleShowEditBooks = () => setShowEditBooks(true);

  const showModalDelete = () => {
    confirm({
      title: "Do you want to delete these items?",
      icon: <ExclamationCircleOutlined />,

      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },

      onCancel() {},
    });
  };

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Books Cover",
      dataIndex: "imgBooks",
      key: "imgBooks",
      render: (imgBooks) => (
        <img className="imgbook-list-book" src={imgBooks} alt={imgBooks} />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
      render: (desc) => (
        <>
          <ShowMoreText
            lines={2}
            more="show"
            less="hide"
            className="content-css"
            anchorClass="my-anchor-css-class"
            expanded={false}
            width={350}
          >
            {desc}
          </ShowMoreText>
        </>
      ),
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div>
            <Tag
              className="tag-list-book"
              color="success"
              icon={<EditOutlined />}
              onClick={() => {
                setShowEditBooks(true);
              }}
            >
              Edit
            </Tag>
          </div>

          <Tag
            className="tag-list-book "
            icon={<DeleteOutlined />}
            color="error"
            onClick={showModalDelete}
          >
            Delete
          </Tag>
        </Space>
      ),
    },
  ];

  const datas = dataBooks;

  return (
    <>
      <div className="container">
        <NavsAdmin />
        <div className="listbooks-pages">
          <div
            style={{
              fontSize: "24px",
              fontWeight: "700",
              paddingBottom: "50px",
            }}
          >
            List Books
          </div>
          {datas?.length !== 0 ? (
            <Table columns={columns} dataSource={datas} />
          ) : (
            <Table style={{ minHeight: "500px" }} columns={columns}>
              <Empty />
            </Table>
          )}
        </div>
        <EditBooksProduct
          showEditBooks={showEditBooks}
          handleCloseEditBooks={handleCloseEditBooks}
          handleShowEditBooks={handleShowEditBooks}
        />
      </div>
    </>
  );
}
