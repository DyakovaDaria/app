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
import GameProcessPersonForm from "./initiativeMode/GameProcessPersonForm";

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
  const [currPersons, setCurrPersons] = useState([]);

  useEffect(() => {
    setCurrPersons(Persons);
    let initiativeFlag = true;
    for (let index = 0; index < currPersons.length && initiativeFlag; index++) {
      if (currPersons[index].initiative == 0) {
        initiativeFlag = false;
      }
    }
    setIsButtonDisabled(!initiativeFlag);
  });

  const getPlayableOrNpc = (el) => {
    if (el.isNpc) {
      return <NpcCharacterForm key={el.id} {...el} />;
    } else {
      return <GameProcessPersonForm key={el.id} {...el} />;
    }
  };

  const startedGameListView = () => {
    if (roundCounter > 0) {
      const newPersons = currPersons.sort(
        (a, b) => b.initiative - a.initiative
      );
      newPersons[turnCounter - 1].hasCurrentTurn = true;
      if (turnCounter > 1) {
        newPersons[turnCounter - 2].hasCurrentTurn = false;
      } else {
        newPersons[newPersons.length - 1].hasCurrentTurn = false;
      }
      setPersons(newPersons);
      return currPersons.map((el) => getPlayableOrNpc(el));
    } else {
      return currPersons.map((el) =>
        el.isNpc ? (
          <NpcCharacterForm key={el.id} {...el} />
        ) : (
          <InitiativeFormPerson key={el.id} {...el} />
        )
      );
    }
  };

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
              } else if (turnCounter == currPersons.length) {
                setTurnCounter(1);
                setRoundCounter(roundCounter + 1);
              } else {
                setTurnCounter(turnCounter + 1);
              }
            }}
          >
            <i className="fa-solid fa-angle-down"></i>
          </button>
          {startedGameListView()}
        </PopupWrap>
      ) : (
        <PopupWrap customClass="pt10">
          {currPersons
            .filter((item) => !item.isNpc)
            .map((el) => (
              <FormPerson key={el.id} {...el} />
            ))}
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
