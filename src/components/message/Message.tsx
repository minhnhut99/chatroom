import React from "react";
import Logo from "../../images/ava.avif";
import "./Message.css";
const Message = () => {
  return (
    <div className="wrapper-mess">
      <header className="mess-header">
        <img className="avatar" src={Logo} alt="" />
        <h3>Grass Ottherage</h3>
        <p>Today at 10:55 AM</p>
      </header>
      <div className="mess-content">
        <p>Good morning Peter</p>
      </div>
    </div>
  );
};

export default Message;
