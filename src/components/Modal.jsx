import React from "react";

const Modal = ({ modal, setModal, dataChar }) => {
  return (
    <>
      {modal && (
        <>
          <div onClick={() => setModal(!modal)} className="overlay"></div>
          <div className="modal-content">
            <h2>{dataChar.name}</h2>
            <img src={dataChar.image}></img>
            <h3 className="border border-primary rounded">
              Gender : {dataChar.gender}
            </h3>
            <h3 className="border border-primary rounded">
              Location : {dataChar.location.name}
            </h3>
            <h3 className="border border-primary rounded">
              Origin : {dataChar.origin.name}
            </h3>
            <h3 className="border border-primary rounded">
              Species : {dataChar.species}
            </h3>
            <h3 className="border border-primary rounded">
              Status : {dataChar.status}
            </h3>
            <button
              onClick={() => setModal(!modal)}
              className="close-modal btn btn-success"
            >
              Close
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
