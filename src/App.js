import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";
import React, { useEffect, useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Messages } from "primereact/messages";
import convertRomanToInteger from "./functions/convertionNumber";

function App() {
  const [nRoman, setNRoman] = useState("");
  const [nInteger, setNInteger] = useState("");
  const msgs = useRef(null);

  const convertNumber = () => {
    if (isNaN(nRoman)) {
      const nNumber = convertRomanToInteger(nRoman.toString().toUpperCase());
      console.log(Math.sign(nNumber));
      if (Math.sign(nNumber) === 1) {
        setNInteger(nNumber);
      } else {
        addMessages();
      }
    } else {
      addMessages();
    }
  };

  const validateString = (pNumberRoman) => {
    setNRoman(pNumberRoman);
  };

  const addMessages = () => {
    msgs.current.show([
      {
        severity: "error",
        summary: "Error",
        detail: ".\n Check if it is roman number is correct",
        sticky: true,
      },
    ]);
  };

  useEffect(() => {
    if (nRoman === "") {
      setNInteger("");
    }
  }, [nRoman]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Convertion Number Roman to integer</p>
      </header>
      <body>
        <Messages ref={msgs} />
        <div className="flex flex-row flex-wrap justify-content-center">
          <div className="align-items-center m-4">
            <h5>Number Roman</h5>
            <span className="p-float-label">
              <InputText
                id="nRoman"
                type="text"
                value={nRoman.toUpperCase()}
                onChange={(e) => validateString(e.target.value)}
              />
            </span>
          </div>
          <div className="flex align-items-center justify-content-center m-2">
            <Button
              icon="pi pi-arrow-right"
              className="p-button-rounded p-button-info"
              onClick={() => convertNumber()}
            />
          </div>
          <div className="align-items-center m-4">
            <h5>Number Integer</h5>
            <span className="p-float-label">
              <InputText id="nInteger" value={nInteger} />
            </span>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
