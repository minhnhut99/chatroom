import React, { useContext } from "react";
import "./ChatWindow.css";
import Message from "../message/Message";
import AddRoom from "../modal/add_room/AddRoom";
import { AppContext } from "../../context/AppProvider";
import InviteRoom from "../modal/invite_room/InviteRoom";
const ChatWindow = () => {
  const { members, isAddRoomShow, isInviteMember, setIsInviteMember }: any =
    useContext(AppContext);
  console.log("isInviteMember", isInviteMember);
  return (
    <div className="chatwindow">
      <header className="header">
        <div className="header-left">
          <div className="btn-addUser">
            <button onClick={() => setIsInviteMember(true)}>Invite User</button>
          </div>
          <div className="avatar-group">
            <div>
              {members.map((member: any, idx: string) => (
                <div
                  style={{
                    position: "relative",
                  }}
                  key={member.id}
                >
                  <img
                    className="img-avatar"
                    src={member.photoURL}
                    alt={member.displayName}
                  />
                  <small style={{ position: "absolute", left: 0, top: "40px" }}>
                    {member.displayName}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="header-right">
          <h3>Secret</h3>
          <p>This is secret room</p>
        </div>
      </header>
      {/* content message  */}
      <div className="content-chat">
        <Message />
      </div>
      <footer className="footer">
        <form className="footer-form">
          <input type="text" placeholder="Enter the message..." />
          <button className="btn-send">Send!</button>
        </form>
      </footer>
      <InviteRoom />
      {isAddRoomShow ? <AddRoom /> : null}
    </div>
  );
};

export default ChatWindow;
