import QRCode from "react-qr-code";

import { useContext, useState } from "react";
import { ContextGame } from "../../context/ContextGame";

export default () => {
  const qr = localStorage.getItem("qr");
  const { isInitiative, setInitiative, Persons, setPersons } =
    useContext(ContextGame);
  const [buttonText, setButtonText] = useState("Перейти к инициативе");

  const setInitiativeModeButton = () => {
    setInitiative(!isInitiative);
    if (isInitiative) {
      for (let index = 0; index < Persons.length; index++) {
        Persons[index].hasCurrentTurn = false;
      }
      setButtonText("Перейти к инициативе");
    } else {
      setButtonText("Выйти из инициативы");
    }
  };

  return (
    <>
      <div className="sidebar sidebar-r pt40">
        <button className="btn-rounded" onClick={setInitiativeModeButton}>
          {buttonText}
        </button>

        <div className="frame-area br-none mt50">
          <p className="text-sm text-grey">Заметки</p>
          <textarea
            placeholder="Можете оставить здесь свои заметки"
            className="noframe-input mt10"
          ></textarea>
        </div>
        <div className="t-center mt30">
          <QRCode
            size={68}
            value={qr}
            viewBox={`0 0 256 256`}
            bgColor={"transparent"}
            fgColor={"#ffffff"}
          />
          <p className="text-upper text-grey">{qr}</p>
        </div>
      </div>
    </>
  );
};
