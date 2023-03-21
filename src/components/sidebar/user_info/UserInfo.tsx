import { IonButton, IonImg, IonItem } from "@ionic/react";
import { collection } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { auth, db } from "../../../firebase";
import "./UserInfo.css";
import { AuthContext } from "../../../context/AuthProvider";
import { Avatar, Typography } from "antd";
import { AuthContextType } from "../../../const/appConst";

const avatarDefault =
  "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-260nw-1913928688.jpg";
const UserInfo = () => {
  const { user } = useContext<AuthContextType | any>(AuthContext);
  useEffect(() => {
    // db.collection("users").
  }, []);

  const handleClickLogout = () => {
    auth.signOut();
  };
  return (
    <IonItem className="userinfo" lines="none">
      <div>
        <Avatar src={user.photoURL}>
          {user.photoURL ? "" : user.displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className="username">
          {user.displayName}
        </Typography.Text>
      </div>
      <IonButton className="btn-logout" onClick={handleClickLogout}>
        Logout
      </IonButton>
    </IonItem>
  );
};

export default UserInfo;
