import React from "react";
import { useState } from "react";
import CharactersCard from "./CharactersCard";
import LocationCard from "./LocationCard";
import Pagination from "./Pagination";
import "./Modal.css";
import Modal from "./Modal";
import ModalLocation from "./ModalLocation";

const LogoAndButtons = ({ useCharacters, setCurrentPage, useLocations }) => {
  const [charisClicked, setCharIsClicked] = useState(false);
  const [locisClicked, setLocIsClicked] = useState(false);
  const [dataChar, setDataChar] = useState(["Test"]);
  const [dataLoc, setDataLoc] = useState(["Test2"]);
  const [modal, setModal] = useState(false);

  const showCharacters = () => {
    setCharIsClicked(true);
  };
  const showLocations = () => {
    setCharIsClicked(false);
    setLocIsClicked(true);
  };

  return (
    <div>
      <div className="pagination justify-content-center gap-4 my-4">
        <img src="\logoFirstPage.webp" alt="logo First Page"></img>
      </div>
      <div className="pagination justify-content-center gap-4 my-4">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={showCharacters}
        >
          Characters
        </button>
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={showLocations}
        >
          Locations
        </button>
      </div>
      <div className="jumbotron text-center">
        <div className="container">
          <h3 className="lead text-warning bg-dark">
            An animated series on adult-swim about the infinite adventures of
            Rick, a genius alcoholic and careless scientist, with his grandson
            Morty, a 14 year-old anxious boy who is not so smart. Together, they
            explore the infinite universes; causing mayhem and running into
            trouble.
          </h3>
          <iframe
            title="track"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/1Y6Pxm8LFw1zJBc3ZW3Stt?utm_source=generator&theme=0"
            width="100%"
            height="150"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {charisClicked ? (
        <div className="container-fluid">
          <div className="row">
            <Modal setModal={setModal} modal={modal} dataChar={dataChar} />
            <CharactersCard
              setDataChar={setDataChar}
              useCharacters={useCharacters}
              setModal={setModal}
              modal={modal}
            />
            <Pagination setCurrentPage={setCurrentPage} data={useCharacters} />
          </div>
        </div>
      ) : locisClicked ? (
        <div className="container-fluid">
          <ModalLocation setModal={setModal} modal={modal} dataLoc={dataLoc} />
          <LocationCard
            setCurrentPage={setCurrentPage}
            setDataLoc={setDataLoc}
            useLocations={useLocations}
            setModal={setModal}
            modal={modal}
          />

          {/* <Pagination setCurrentPage={setCurrentPage} data={useLocations} /> */}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LogoAndButtons;
