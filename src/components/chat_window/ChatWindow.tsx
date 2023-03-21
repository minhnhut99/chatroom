import React, {
  ChangeEvent,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import "./ChatWindow.css";
import Message from "../message/Message";
import AddRoom from "../modal/add_room/AddRoom";
import { AppContext } from "../../context/AppProvider";
import InviteRoom from "../modal/invite_room/InviteRoom";
import { Avatar, Button, Form, Input, Tooltip } from "antd";
import { GrAdd } from "react-icons/gr";
import { AuthContext } from "../../context/AuthProvider";
import { addDocument } from "../../services";
import useFirestore from "../../hooks/useFirestore";
import styled from "styled-components";
import {
  AppContextType,
  AuthContextType,
  Member,
  Mes,
  RoomType,
} from "../../const/appConst";

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 0;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

const ChatWindow = () => {
  const { members, isAddRoomShow, selectedRoom, setIsInviteMember } =
    useContext<AppContextType | any>(AppContext);
  const {
    user: { uid, photoURL, displayName },
  } = useContext<AuthContextType | any>(AuthContext);
  const [inputValue, setInputValue] = useState("");
  const [form] = Form.useForm();
  const inputRef = useRef(null);
  const messageListRef = useRef(null);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = () => {
    addDocument("messages", {
      text: inputValue,
      uid,
      photoURL,
      roomId: selectedRoom.id,
      displayName,
    });
    form.resetFields(["message"]);
  };
  const condition = useMemo(
    () => ({
      fieldName: "roomId",
      operator: "==",
      compareValue: selectedRoom.id,
    }),
    [selectedRoom.id]
  );

  const messages = useFirestore("messages", condition);
  console.log("message", messages);
  return (
    <div className="chatwindow">
      <header className="header">
        <div className="header-left">
          <div className="btn-addUser">
            <button
              onClick={() => setIsInviteMember(true)}
              className="btn-invite"
            >
              <GrAdd size={15} style={{ marginRight: "5px" }} />
              Invite User
            </button>
          </div>
          <div className="avatar-group">
            <Avatar.Group size="small" maxCount={2}>
              {members.map((member: Member) => {
                console.log("memmber", member);
                return (
                  <Tooltip title={member.displayName} key={member.id}>
                    <Avatar src={member.photoURL}>
                      {member.photoURL
                        ? ""
                        : member.displayName?.charAt(0)?.toUpperCase()}
                    </Avatar>
                  </Tooltip>
                );
              })}
            </Avatar.Group>
          </div>
        </div>
        <div className="header-right">
          <h3>Secret</h3>
          <p>This is secret room</p>
        </div>
      </header>
      {/* content message  */}
      <Message />
      <div
        style={{
          marginTop: " auto",
        }}
      >
        <ContentStyled>
          <MessageListStyled ref={messageListRef}>
            {messages.map((mes: Mes) => {
              return (
                <Message
                  key={mes.id}
                  text={mes.text}
                  photoURL={mes.photoURL}
                  displayName={mes.displayName}
                  createdAt={mes.createdAt}
                />
              );
            })}
          </MessageListStyled>
        </ContentStyled>
        <FormStyled form={form}>
          <Form.Item name="message">
            <Input
              ref={inputRef}
              onChange={handleInputChange}
              onPressEnter={handleOnSubmit}
              placeholder="Enter message..."
              bordered={false}
              autoComplete="off"
            />
          </Form.Item>
          <Button type="primary" onClick={handleOnSubmit}>
            Send!
          </Button>
        </FormStyled>
      </div>
      <InviteRoom />
      <AddRoom />
    </div>
  );
};

export default ChatWindow;
