import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { AuthContext } from "../../../context/AuthProvider";
import { addDocument } from "../../../services";
import "./AddRoom.css";
const AddRoom = () => {
  const { setIsAddRoomShow }: any = useContext(AppContext);
  const {
    user: { uid },
  }: any = useContext(AuthContext);
  const [dataForm, setDataForm] = useState<any>({
    name: "",
    desc: "",
  });
  const handleSubmit = (event: any) => {
    event?.preventDefault();
    addDocument("rooms", { ...dataForm, members: [uid] });
    setDataForm({ name: "", desc: "" });
  };
  const handleClickCancel = () => {
    setIsAddRoomShow(false);
  };
  const handleChangeInputValue = (event: any) => {
    const valueInput = event.target.value;
    setDataForm({
      ...dataForm,
      [event.target.name]: valueInput,
    });
  };
  console.log("dataForm", dataForm);
  return (
    <div className="wrapper-modal">
      <div className="container-modal">
        <div className="inner-modal">
          <header>
            <span onClick={() => handleClickCancel()}>X</span>
          </header>
          <div className="content-form">
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="form-item">
                <label htmlFor="name-group">Name group:</label>
                <input
                  id="name-group"
                  type="text"
                  name="name"
                  onChange={handleChangeInputValue}
                />
              </div>
              <div className="form-item">
                <label htmlFor="desc-group">Desc group:</label>
                <textarea
                  onChange={handleChangeInputValue}
                  name="desc"
                  id="desc-group"
                  style={{
                    width: "100%",
                    height: "70px",
                    resize: "none",
                    outline: "none",
                  }}
                ></textarea>
              </div>
              <div className="btn-group">
                <button className="cancel" onClick={() => handleClickCancel()}>
                  Cancel
                </button>
                <button className="submit" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
