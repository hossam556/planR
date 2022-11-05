import React, { useState, useEffect } from "react";
import "./home.scss";
import Card from "../../components/ui/card/Card";
import Modal from "../../components/ui/modal/Modal";

const titles = {
  ambitie: "ambitie",
  doelstellingen: "doelstellingen",
  stragtigies: "strategies",
  dashboard: "dashboard",
  actions: "actions",
};

const intialData = {
  title: "",
  description: "",
};

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [data, setData] = useState(intialData);
  const [items, setItems] = useState({
    [titles.ambitie]: [],
    [titles.doelstellingen]: [],
    [titles.stragtigies]: [],
    [titles.dashboard]: [],
    [titles.actions]: [],
  });
  const [container, setContainer] = useState("");

  const showModalHandler = (title) => {
    setModalType(title);
    setShowModal((prev) => !prev);
  };

  const sumbitFormHandler = (e) => {
    e.preventDefault();
    let newItems = [...items[modalType]];
    newItems.push(data);

    setItems({
      ...items,
      [modalType]: newItems,
    });
    setShowModal(false);
    setData(intialData);
  };

  const inputHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const dragEndHandler = (title, index, item) => {
    if (container === title) return;
    console.log(items[container]);
    let draggedToItems = [...items[container], item];
    let draggedFromItems = items[title].filter((el, i) => i !== index);
    setItems({
      ...items,
      [container]: draggedToItems,
      [title]: draggedFromItems,
    });
  };

  const dragOverHandler = (title) => {
    if (container === title) return;
    setContainer(title);
  };

  return (
    <div className="home-wrapper">
      {showModal && (
        <Modal
          inputHandler={inputHandler}
          showModalHandler={showModalHandler}
          sumbitFormHandler={sumbitFormHandler}
          data={data}
        />
      )}
      <div className="home-wrapper-table">
        <Card
          title={titles.ambitie}
          className="home-wrapper-table-box1"
          showModalHandler={showModalHandler}
          items={items[titles.ambitie]}
          dragOverHandler={dragOverHandler}
          dragEndHandler={dragEndHandler}
        />
        <Card
          title={titles.doelstellingen}
          className="home-wrapper-table-box2"
          showModalHandler={showModalHandler}
          items={items[titles.doelstellingen]}
          dragOverHandler={dragOverHandler}
          dragEndHandler={dragEndHandler}
        />
        <div className="home-wrapper-table-box3">
          <div className="home-wrapper-table-box3_top">
            <Card
              title={titles.stragtigies}
              showModalHandler={showModalHandler}
              items={items[titles.stragtigies]}
              dragOverHandler={dragOverHandler}
              dragEndHandler={dragEndHandler}
            />
            <Card
              title={titles.dashboard}
              showModalHandler={showModalHandler}
              items={items[titles.dashboard]}
              dragOverHandler={dragOverHandler}
              dragEndHandler={dragEndHandler}
            />
            <Card
              title={titles.actions}
              showModalHandler={showModalHandler}
              items={items[titles.actions]}
              dragOverHandler={dragOverHandler}
              dragEndHandler={dragEndHandler}
            />
          </div>
          <div
            onDragOver={() => dragOverHandler(titles.stragtigies)}
            className="home-wrapper-table-box3_drag"
          >
            <p className="empty">Drag items here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
