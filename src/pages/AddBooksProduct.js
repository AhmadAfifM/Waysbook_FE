import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  message,
  Upload,
  DatePicker,
} from "antd";
import "antd/dist/antd.min.css";
import "../index.css";
import { FileAddOutlined, InboxOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";

import NavsAdmin from "../components/NavsAdmin";

const { TextArea } = Input;
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

  onChange(info) {
    const { status } = info.file;

    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

export default function AddBooksDetail() {
  return (
    <div className="container " style={{ minHeight: "100vh" }}>
      <NavsAdmin />
      <Row className="justify-content-center">
        <Col
          span={19}
          className="d-flex justify-content-start pb-2 ps-3"
          style={{ width: "200vh" }}
        >
          <div
            style={{
              fontWeight: "700",
              fontSize: "36px",
            }}
          >
            Add Book
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center  ">
        <Col span={20} className="d-flex  justify-content-center pt-4">
          <div>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item>
                <Input
                  style={{
                    backgroundColor: "rgba(210, 210, 210, 0.25)",
                    border: "2px solid #BCBCBC",
                    color: "#333333",
                    width: "995px",
                    height: "50px",
                    borderRadius: "5px",
                  }}
                  placeholder="Title"
                />
              </Form.Item>
              <Form.Item>
                <DatePicker
                  style={{
                    backgroundColor: "rgba(210, 210, 210, 0.25)",
                    border: "2px solid #BCBCBC",
                    color: "#333333",
                    width: "995px",
                    height: "50px",
                    borderRadius: "5px",
                  }}
                  placeholder="Publication Date"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  style={{
                    backgroundColor: "rgba(210, 210, 210, 0.25)",
                    border: "2px solid #BCBCBC",
                    color: "#333333",
                    width: "995px",
                    height: "50px",
                    borderRadius: "5px",
                  }}
                  placeholder="Pages"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  style={{
                    backgroundColor: "rgba(210, 210, 210, 0.25)",
                    border: "2px solid #BCBCBC",
                    color: "#333333",
                    width: "995px",
                    height: "50px",
                    borderRadius: "5px",
                  }}
                  placeholder="ISBN"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  style={{
                    backgroundColor: "rgba(210, 210, 210, 0.25)",
                    border: "2px solid #BCBCBC",
                    color: "#333333",
                    width: "995px",
                    height: "50px",
                    borderRadius: "5px",
                  }}
                  placeholder="Price"
                />
              </Form.Item>
              <Form.Item>
                <TextArea
                  style={{
                    backgroundColor: "rgba(210, 210, 210, 0.25)",
                    border: "2px solid #BCBCBC",
                    color: "#333333",
                    width: "1000px",
                    borderRadius: "5px",
                  }}
                  placeholder="About This Book"
                  autoSize={{
                    minRows: 3,
                    maxRows: 5,
                  }}
                />
              </Form.Item>
              <Dragger className="mb-3" {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  You can upload single or bulk upload to this area!
                </p>
              </Dragger>
            </Form>
          </div>
        </Col>
      </Row>
      <Row className=" justify-content-center d-flex">
        <Col span={19} className="d-flex justify-content-end ">
          <Button
            className="btn-addcart d-flex align-items-center justify-content-center"
            type="primary"
          >
            Add Book
            <FileAddOutlined style={{ fontSize: "20px" }} />
          </Button>
        </Col>
      </Row>
    </div>
  );
}
