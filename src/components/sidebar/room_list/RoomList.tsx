import { useContext } from "react";
import AppProvider, { AppContext } from "../../../context/AppProvider";
import "./RoomList.css";
const RoomList = () => {
  const { rooms }: any = useContext(AppContext);
  const { setIsAddRoomShow, setSelectedRoomId }: any = useContext(AppContext);
  return (
    <div>
      <ul className="roomlist">
        <h3>Room list</h3>
        {rooms.map((room: any) => {
          return (
            <li key={room.id} onClick={() => setSelectedRoomId(room.id)}>
              {room.name}
            </li>
          );
        })}
      </ul>
      <button className="btn-add" onClick={() => setIsAddRoomShow(true)}>
        Add Room
      </button>
    </div>
  );
};

export default RoomList;
