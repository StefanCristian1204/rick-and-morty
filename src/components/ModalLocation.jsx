import React from "react";

const ModalLocation = (modal) => {
  return (
    <>
      {modal.modal && (
        <>
          <div
            onClick={() => modal.setModal(!modal.modal)}
            className="overlay"
          ></div>
          <div className="modal-content">
            <h2>{modal.dataLoc.name}</h2>
            <img src="\planet.png"></img>
            <h3 className="border border-primary rounded">
              Dimension : {modal.dataLoc.dimension}
            </h3>
            <h3 className="border border-primary rounded">
              Type : {modal.dataLoc.type}
            </h3>
            <button
              onClick={() => modal.setModal(!modal.modal)}
              className="close-modal btn btn-success"
            >
              Close
            </button>
            <div>
              <ul>
                {modal.dataLoc.residents.map((el, index) => {
                  return (
                    <li key={index}>
                      Character number {el.split("/").splice(5, 6).join()}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ModalLocation;
