import React from "react";
import { Row, Col, Button, Form, Input, message, Upload } from "antd";
import { Modal } from "react-bootstrap";
import "antd/dist/antd.min.css";
import "../../index.css";
import { InboxOutlined } from "@ant-design/icons";

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

export default function EditProfile({
  showEditProfile,
  handleCloseEditProfile,
}) {
  return (
    <>
      <Modal
        dialogClassName="modal-edit-books"
        show={showEditProfile}
        onHide={handleCloseEditProfile}
        backdrop="static"
        centered
      >
        <Modal.Header className="me-5" closeButton>
          <Modal.Title
            className="mt-3 ms-2 "
            style={{ padding: "20px", fontWeight: "700", fontSize: "40px" }}
          >
            Edit Profile
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex flex-column align-items-center ">
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
                      placeholder="Name"
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
                      placeholder="Email"
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
                      placeholder="Gender"
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
                      placeholder="Phone Number"
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
                      placeholder="Address"
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

          <Button
            className="mt-5 text-white"
            style={{
              backgroundColor: "#393939",
              width: "350px",
              height: "50px",
              fontWeight: "800",
              border: "2px solid #393939",
            }}
            onClick={handleCloseEditProfile}
          >
            Update Profile
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
