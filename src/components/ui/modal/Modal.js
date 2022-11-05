import React from "react";
import "./Modal.scss";

const Modal = ({ inputHandler, showModalHandler, sumbitFormHandler, data }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-wrapper_close" onClick={showModalHandler}>
        <span>x</span>
      </div>
      <section className="modal-wrapper_section">
        <h1>New</h1>
        <p>Enter the data in the fields to create new task</p>
        <form onSubmit={sumbitFormHandler}>
          <label className="modal-wrapper_section-input">
            <span>Title</span>
            <input type="text" name="title" onChange={inputHandler} />
          </label>

          <label className="modal-wrapper_section-textarea">
            <span>Description</span>
            <textarea type="text" name="description" onChange={inputHandler} />
          </label>

          <div className={`modal-wrapper_section-button`}>
            <button
              type="submit"
              className={`${!data.title ? "disabled" : ""}`}
              disabled={!data.title}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Modal;
