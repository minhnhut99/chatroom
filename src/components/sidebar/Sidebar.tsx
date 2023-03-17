import { IonContent, IonHeader } from "@ionic/react";
import React from "react";
import RoomList from "./room_list/RoomList";
import "./Sidebar.css";
import UserInfo from "./user_info/UserInfo";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <IonHeader>
        <UserInfo />
      </IonHeader>
      <IonContent>
        <RoomList />
      </IonContent>
    </div>
  );
};

export default Sidebar;
