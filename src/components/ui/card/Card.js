import React, { useState } from "react";
import "./Card.scss";
import { Add } from "../../../assets/icons/index";

const Card = ({
  title = "header",
  items,
  className = "",
  showModalHandler,
  dragOverHandler,
  dragEndHandler,
}) => {
  return (
    <div
      className={`card ${className}`}
      onDragOver={() => dragOverHandler(title)}
    >
      <p className="card-title">{title}</p>
      <span className="card-icon" onClick={() => showModalHandler(title)}>
        <Add />
      </span>
      <div className="card-items">
        {items.length > 0 ? (
          items.map((item, i) => (
            <div
              key={i}
              className={`card-items-item-wrapper ${
                title !== "ambitie" &&
                title !== "doelstellingen" &&
                i > 0 &&
                "border-style"
              }`}
              draggable
              onDragEnd={() => dragEndHandler(title, i, item)}
            >
              <div className="card-items-item-wrapper_item">{item.title}</div>
            </div>
          ))
        ) : (
          <p className="empty">empty state</p>
        )}
      </div>
    </div>
  );
};

export default Card;
