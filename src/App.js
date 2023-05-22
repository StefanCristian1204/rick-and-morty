import React from "react";
import "./App.css";
import { useAll, useCharacters, useLocations, usePlanets } from "./api/useData";
import LogoAndButtons from "./components/LogoAndButtons";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const characters = useCharacters(currentPage);
  const locations = useLocations(currentPage);
  // const planets = usePlanets(); ---Rate limit exceed
  return (
    <div className="App">
      <LogoAndButtons
        useCharacters={characters}
        useLocations={locations}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
