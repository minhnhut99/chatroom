import React from "react";
import { IonItem, IonPage, IonSpinner } from "@ionic/react";

const LoadingSpinner: React.FC = () => {
  return (
    <IonPage>
      <IonItem
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <IonSpinner
          color="dark"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          name="bubbles"
        >
          Wait a few second
        </IonSpinner>
      </IonItem>
    </IonPage>
  );
};
export default LoadingSpinner;
