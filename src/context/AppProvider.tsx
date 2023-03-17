import { useIonRouter } from "@ionic/react";
import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useMemo,
} from "react";
import useFirestore from "../hooks/useFirestore";
import { AuthContext } from "./AuthProvider";
export const AppContext = createContext({});

const AppProvider = ({ children }: any) => {
  const [isAddRoomShow, setIsAddRoomShow] = useState<boolean>(false);
  const [isInviteMember, setIsInviteMember] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const {
    user: { uid },
  }: any = useContext(AuthContext);

  const roomsCondition = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);

  // room list
  const rooms = useFirestore("rooms", roomsCondition);
  const selectedRoom = React.useMemo(
    () => rooms.find((room: any) => room.id === selectedRoomId) || {},
    [rooms, selectedRoomId]
  );
  const usersCondition = useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in",
      compareValue: selectedRoom.members,
    };
  }, [selectedRoom.members]);

  // // members
  const members = useFirestore("users", usersCondition);
  return (
    <AppContext.Provider
      value={{
        rooms,
        isAddRoomShow,
        setIsAddRoomShow,
        isInviteMember,
        setIsInviteMember,
        selectedRoomId,
        setSelectedRoomId,
        selectedRoom,
        members,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
