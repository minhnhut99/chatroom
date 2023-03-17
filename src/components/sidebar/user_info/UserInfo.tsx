import { IonButton, IonImg, IonItem } from "@ionic/react";
import { collection } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { auth, db } from "../../../firebase";
import "./UserInfo.css";
import { AuthContext } from "../../../context/AuthProvider";
interface UserDataTypes {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}
const avatarDefault =
  "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-260nw-1913928688.jpg";
const UserInfo = () => {
  const { user }: any = useContext(AuthContext);
  useEffect(() => {
    // db.collection("users").
  }, []);

  const handleClickLogout = () => {
    auth.signOut();
  };
  return (
    <IonItem className="userinfo" lines="none">
      <div className="user-wrapp-img">
        <img
          className="user-img"
          src={user?.photoURL || avatarDefault}
          alt=""
        />
        <p>{user?.displayName}</p>
      </div>
      <IonButton className="btn-logout" onClick={handleClickLogout}>
        Logout
      </IonButton>
    </IonItem>
  );
};

export default UserInfo;
