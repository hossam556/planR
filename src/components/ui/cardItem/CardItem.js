import React, { useState } from "react";
import "../card/Card.scss";
import { Delete, Edit } from "../../../assets/icons/index";

const CardItem = ({
  dragEndHandler,
  item,
  index,
  title,
  deleteHandler,
  editHandler,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`card-items-item-wrapper ${
        title !== "ambitie" &&
        title !== "doelstellingen" &&
        index > 0 &&
        "border-style"
      }`}
      draggable
      onDragEnd={() => dragEndHandler(title, index, item)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="card-items-item-wrapper_item">{item.title}</div>
      {show && (
        <div className="card-items-item-wrapper_options">
          <button onClick={() => deleteHandler(title, index)}>
            <Delete />
          </button>
          <button onClick={() => editHandler(title, index)}>
            <Edit />
          </button>
        </div>
      )}
    </div>
  );
};

export default CardItem;
