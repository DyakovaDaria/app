import PopupWrap from "../PopupWrap";

import { useContext, useEffect, useState } from "react";
import { ContextGame } from "../../context/ContextGame";

import FormPerson from "./standardMode/FormPlayablePerson";
import AddEffect from "./standardMode/AddEffect";
import InitiativeFormPerson from "./initiativeMode/InitiativeFormPerson";

import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import AddNpc from "./initiativeMode/AddNpc";
import NpcCharacterForm from "./initiativeMode/NpcCharacterForm";

export default () => {
  const {
    Persons,
    setPersons,
    visibleEffect,
    isInitiative,
    visibleNpcCreate,
    setVisibleNpcCreate,
  } = useContext(ContextGame);

  if (!Persons.length) return null;

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [turnCounter, setTurnCounter] = useState(0);
  const [roundCounter, setRoundCounter] = useState(0);

  useEffect(() => {
    let initiativeFlag = true;
    for (let index = 0; index < Persons.length && initiativeFlag; index++) {
      if (Persons[index].initiative == 0) {
        initiativeFlag = false;
      }
    }
    setIsButtonDisabled(!initiativeFlag);
  });

  return (
    <>
      <SidebarLeft />

      <SidebarRight />

      {isInitiative ? (
        <PopupWrap customClass="pt10 popup-fx">
          <button
            className="btn-circle add-person"
            onClick={() => setVisibleNpcCreate(true)}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
          <div className="btn-r-inf add-person mt60">
            <p className="text-round text-light">{roundCounter}</p>
          </div>
          <div className="btn-r-inf add-person mt90">
            <p className="text-sm text-light">раунд</p>
          </div>
          <button
            className="btn-circle add-person mt150"
            disabled={isButtonDisabled}
            onClick={() => {
              console.log(turnCounter);
              if (turnCounter == 0) {
                setTurnCounter(turnCounter + 1);
                setRoundCounter(roundCounter + 1);
              } else if (turnCounter == Persons.length) {
                setTurnCounter(1);
                setRoundCounter(roundCounter + 1);
              } else {
                setTurnCounter(turnCounter + 1);
              }
              // const newPersons = Persons.sort(
              //   (a, b) => b.initiative - a.initiative
              // );
              // setPersons(() => newPersons);
              // localStorage.setItem("persons", JSON.stringify(newPersons));

              // <div className="popup-lightning"></div>
            }}
          >
            <i className="fa-solid fa-angle-down"></i>
          </button>
          {/* {Persons.sort((a, b) => b.initiative - a.initiative).map((el) =>
            el.isNpc ? (
              <NpcCharacterForm key={el.id} {...el} />
            ) : (
              <InitiativeFormPerson key={el.id} {...el} />
            )
          )} */}
          {Persons.map((el) =>
            el.isNpc ? (
              <NpcCharacterForm key={el.id} {...el} />
            ) : (
              <InitiativeFormPerson key={el.id} {...el} />
            )
          )}
        </PopupWrap>
      ) : (
        <PopupWrap customClass="pt10">
          {Persons.map((el) =>
            el.isNpc ? (
              <NpcCharacterForm key={el.id} {...el} />
            ) : (
              <FormPerson key={el.id} {...el} />
            )
          )}
        </PopupWrap>
      )}

      {visibleEffect ? (
        <div className="popup-overlay">
          <PopupWrap customClass="popup-fx">
            <AddEffect />
          </PopupWrap>
        </div>
      ) : null}

      {visibleNpcCreate ? (
        <div className="popup-overlay">
          <PopupWrap customClass="popup-fx">
            <AddNpc />
          </PopupWrap>
        </div>
      ) : null}
    </>
  );
};
