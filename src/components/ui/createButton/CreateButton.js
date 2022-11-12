import React from "react";
import "./CreateButton.scss";
import { Add } from "../../../assets/icons/index";

const CreateButton = ({ clickHandler }) => {
  return (
    <button onClick={clickHandler} className="createBtn-wrapper">
      +
    </button>
  );
};

export default CreateButton;
