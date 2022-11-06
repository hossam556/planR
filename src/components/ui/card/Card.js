import React from "react";
import "./Card.scss";
import { Add } from "../../../assets/icons/index";
import CardItem from "../cardItem/CardItem";

const Card = ({
  title = "header",
  items,
  className = "",
  showModalHandler,
  dragOverHandler,
  dragEndHandler,
  deleteHandler,
  editHandler,
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
            <CardItem
              key={i}
              dragEndHandler={dragEndHandler}
              item={item}
              index={i}
              title={title}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          ))
        ) : (
          <p className="empty">empty state</p>
        )}
      </div>
    </div>
  );
};

export default Card;
