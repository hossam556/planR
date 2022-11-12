import React, { useState } from "react";
import "./Modal.scss";

const intialData = {
  subject: "",
  status: "",
  project: "",
  description: "",
};

const Modal = ({
  setShowPopup,
  sumbitFormHandler,
  oldData,
  editFormHandler,
}) => {
  const [values, setValues] = useState(oldData ? oldData : intialData);

  const inputHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const disableBtnHandler = () => {
    if (
      !values.subject ||
      !values.project ||
      !values.status ||
      !values.description
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-wrapper">
        <div
          className="modal-wrapper_close"
          onClick={() => setShowPopup(false)}
        >
          <span>x</span>
        </div>
        <section className="modal-wrapper_section">
          <h1>Create A Ticket</h1>
          <form
            onSubmit={
              oldData
                ? (e) => editFormHandler(e, values)
                : (e) => sumbitFormHandler(e, values)
            }
          >
            <div className="modal-wrapper_section_inputs">
              <label className="modal-wrapper_section-input">
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={values?.subject}
                  onChange={inputHandler}
                />
              </label>

              <label className="modal-wrapper_section-input">
                <span>Project</span>
                <input
                  type="text"
                  name="project"
                  value={values?.project}
                  onChange={inputHandler}
                />
              </label>

              <label className="modal-wrapper_section-textarea">
                <span>Description</span>
                <textarea
                  type="text"
                  name="description"
                  value={values?.description}
                  onChange={inputHandler}
                />
              </label>

              <label className="modal-wrapper_section-input">
                <span>Status</span>
                <input
                  type="text"
                  name="status"
                  value={values?.status}
                  onChange={inputHandler}
                />
              </label>
            </div>

            <div className={`modal-wrapper_section-button`}>
              <button
                type="submit"
                className={`${disableBtnHandler() ? "disabled" : ""}`}
                disabled={disableBtnHandler()}
              >
                Create
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Modal;
