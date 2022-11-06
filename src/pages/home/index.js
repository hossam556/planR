import React, { useState } from "react";
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

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [oldData, setOldData] = useState(null);
  const [editItem, setEditItem] = useState(null);
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

  const sumbitFormHandler = (e, data) => {
    e.preventDefault();
    let newItems = [...items[modalType]];
    newItems.push(data);

    setItems({
      ...items,
      [modalType]: newItems,
    });
    setShowModal(false);
  };

  const editFormHandler = (e, data) => {
    e.preventDefault();
    let newItems = [...items[editItem.title]];
    newItems[editItem.index] = data;

    setItems({
      ...items,
      [editItem.title]: newItems,
    });
    setShowModal(false);
  };

  const dragEndHandler = (title, index, item) => {
    if (container === title) return;
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

  const deleteHandler = (title, index) => {
    let newItems = [...items[title]];
    newItems.splice(index, 1);
    setItems({
      ...items,
      [title]: newItems,
    });
  };

  const editHandler = (title, index) => {
    let editedItem = items[title][index];

    setOldData(editedItem);
    setEditItem({
      title,
      index,
    });
    setShowModal(true);
  };

  return (
    <div className="home-wrapper">
      {showModal && (
        <Modal
          showModalHandler={showModalHandler}
          sumbitFormHandler={sumbitFormHandler}
          oldData={oldData}
          editFormHandler={editFormHandler}
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
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
        <Card
          title={titles.doelstellingen}
          className="home-wrapper-table-box2"
          showModalHandler={showModalHandler}
          items={items[titles.doelstellingen]}
          dragOverHandler={dragOverHandler}
          dragEndHandler={dragEndHandler}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
        <div className="home-wrapper-table-box3">
          <div className="home-wrapper-table-box3_top">
            <Card
              title={titles.stragtigies}
              showModalHandler={showModalHandler}
              items={items[titles.stragtigies]}
              dragOverHandler={dragOverHandler}
              dragEndHandler={dragEndHandler}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
            <Card
              title={titles.dashboard}
              showModalHandler={showModalHandler}
              items={items[titles.dashboard]}
              dragOverHandler={dragOverHandler}
              dragEndHandler={dragEndHandler}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
            <Card
              title={titles.actions}
              showModalHandler={showModalHandler}
              items={items[titles.actions]}
              dragOverHandler={dragOverHandler}
              dragEndHandler={dragEndHandler}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
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
