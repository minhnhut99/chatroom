import React, { useContext } from "react";
import { Form, Modal, Input } from "antd";
import { AppContext } from "../../../context/AppProvider";
import { addDocument } from "../../../services";
import { AuthContext } from "../../../context/AuthProvider";
import { AppContextType, AuthContextType } from "../../../const/appConst";

export default function AddRoomModal() {
  const { isAddRoomShow, setIsAddRoomShow } = useContext<AppContextType | any>(
    AppContext
  );
  const {
    user: { uid },
  } = useContext<AuthContextType | any>(AuthContext);
  const [form] = Form.useForm();

  const handleOk = () => {
    // handle logic
    // add new room to firestore
    addDocument("rooms", { ...form.getFieldsValue(), members: [uid] });

    // reset form value
    form.resetFields();

    setIsAddRoomShow(false);
  };

  const handleCancel = () => {
    // reset form value
    form.resetFields();

    setIsAddRoomShow(false);
  };

  return (
    <div>
      <Modal open={isAddRoomShow} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical">
          <Form.Item label="Name Room" name="name">
            <Input placeholder="Enter name room" />
          </Form.Item>
          <Form.Item label="Desc" name="description">
            <Input.TextArea placeholder="Enter Desc" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
