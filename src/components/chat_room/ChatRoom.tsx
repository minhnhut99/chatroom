import { IonPage } from "@ionic/react";
import ChatWindow from "../chat_window/ChatWindow";
import Sidebar from "../sidebar/Sidebar";
import "./ChatRoom.css";
const ChatRoom = () => {
  return (
    <IonPage>
      <div className="chatroom">
        <ChatWindow />
        <Sidebar />
      </div>
    </IonPage>
  );
};

export default ChatRoom;
