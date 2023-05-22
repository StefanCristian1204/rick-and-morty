import React from "react";
const CharactersCard = ({ useCharacters, setDataChar, setModal, modal }) => {
  return useCharacters.results.map((el) => {
    return (
      <div
        style={{ width: "18rem" }}
        key={el.id}
        className="container-fluid border border-success rounded col-xl-3 col-lg-4  col-sm-6 col-xs-8 col-12"
      >
        <div onClick={() => (setDataChar(el), setModal(!modal))}>
          <div>
            <h1>{el.name}</h1>
          </div>
          <div>
            <img className="img-fluid" src={el.image} alt={el.image}></img>{" "}
          </div>
          <div>
            <h2 className="border rounded-bottom border-danger">
              {el.species}
            </h2>
          </div>
        </div>
      </div>
    );
  });
};

export default CharactersCard;
