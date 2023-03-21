import { useContext } from "react";
import { AppContext } from "../../../context/AppProvider";
import { Collapse, Typography, Button } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import styled from "styled-components";
import "./RoomList.css";
import { AppContextType, RoomType } from "../../../const/appConst";
const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header-text {
      color: black;
      font-weight: bold;
    }
    .ant-collapse-expand-icon {
      color: black;
    }
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;
const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;
const RoomList = () => {
  const { setIsAddRoomShow, setSelectedRoomId, rooms } = useContext<
    AppContextType | any
  >(AppContext);
  const handleAddRoom = () => {
    setIsAddRoomShow(true);
  };
  return (
    <Collapse
      style={{ backgroundColor: "white", color: "black", height: "100vh" }}
      ghost
      defaultActiveKey={["1"]}
    >
      <PanelStyled header="Room list" key="1">
        {rooms.map((room: RoomType) => (
          <LinkStyled key={room.id} onClick={() => setSelectedRoomId(room.id)}>
            {room.name}
          </LinkStyled>
        ))}
        <Button
          style={{ backgroundColor: "#1677ff", padding: "5px" }}
          type="text"
          icon={<PlusSquareOutlined />}
          className="add-room"
          onClick={handleAddRoom}
        >
          Add Room
        </Button>
      </PanelStyled>
    </Collapse>
  );
};

export default RoomList;
