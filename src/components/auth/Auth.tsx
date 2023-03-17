import { IonButton, IonContent, IonHeader, IonPage } from "@ionic/react";
import {
  getAdditionalUserInfo,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase";
import { addDocument } from "../../services";
const googleProvider = new GoogleAuthProvider();
const Auth = () => {
  const handleClickLogin = async (googleProvider: any) => {
    const result = await signInWithPopup(auth, googleProvider);
    const detail = getAdditionalUserInfo(result);
    try {
      if (detail?.isNewUser) {
        await addDocument("users", {
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
          uid: result.user.uid,
          providerId: detail.providerId,
          // keywords:generate
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <IonPage>
      <IonHeader>Chat Room</IonHeader>
      <IonContent
        style={{
          textAlign: "center",
        }}
      >
        <IonButton
          onClick={() => handleClickLogin(googleProvider)}
          style={{ marginTop: "150px", color: "black", fontSize: "13px" }}
        >
          <FcGoogle size={25} />
          Login with Google?
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Auth;
