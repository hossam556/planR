import React, { useState } from "react";
import "./home.scss";
import Table from "../../components/ui/table/Table";
import CreateButton from "../../components/ui/createButton/CreateButton";
import Modal from "../../components/ui/modal/Modal";
import { staticData } from "../../utils/tableData";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState(staticData);
  const [editedItem, setEditedItem] = useState(null);

  const sumbitFormHandler = (e, values) => {
    e.preventDefault();
    setData([values, ...data]);
    setShowPopup(false);
  };

  const editFormHandler = (e, values) => {
    e.preventDefault();
    let newData = [...data];
    newData[editedItem.index] = values;
    setData(newData);
    setShowPopup(false);
    setEditedItem(null);
  };

  const getEditedItem = (item, i) => {
    setEditedItem({ ...item, index: i });
    setShowPopup(true);
  };

  return (
    <div className="home-wrapper">
      <h2>Tickets Dashboard</h2>
      <Table data={data} setData={setData} getEditedItem={getEditedItem} />
      <CreateButton clickHandler={() => setShowPopup(true)} />
      {showPopup && (
        <Modal
          setShowPopup={setShowPopup}
          sumbitFormHandler={sumbitFormHandler}
          editFormHandler={editFormHandler}
          oldData={editedItem}
        />
      )}
    </div>
  );
};

export default Home;
