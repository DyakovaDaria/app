import PopupWrap from "../PopupWrap";

import { useContext, useEffect, useState } from "react";
import { ContextGame } from "../../context/ContextGame";

import FormPerson from "./standardMode/FormPlayablePerson";
import AddEffect from "./standardMode/AddEffect";
import InitiativeFormPerson from "./initiativeMode/InitiativeFormPerson";

import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import AddNpc from "./initiativeMode/AddNpc";
import NonPlayableCharacterModel from "../../models/NonPlayableCharacterModel";
import NpcCharacterForm from "./initiativeMode/NpcCharacterForm";

export default () => {
  const {
    Persons,
    visibleEffect,
    isInitiative,
    visibleNpcCreate,
    setVisibleNpcCreate,
  } = useContext(ContextGame);

  if (!Persons.length) return null;

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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
            <p className="text-round text-light">0</p>
          </div>
          <div className="btn-r-inf add-person mt90">
            <p className="text-sm text-light">раунд</p>
          </div>
          <button
            className="btn-circle add-person mt150"
            disabled={isButtonDisabled}
          >
            <i className="fa-solid fa-angle-down"></i>
          </button>
          {Persons.filter((el) => !el.isNpc).map((el) => (
            <InitiativeFormPerson
              key={el.id}
              {...el}
            />
          ))}
          {Persons.filter((el) => el.isNpc).map((el) => (
            <NpcCharacterForm
              key={el.id}
              {...el}
            />
          ))}
        </PopupWrap>
      ) : (
        <PopupWrap customClass="pt10">
          {Persons.filter((el) => !el.isNpc).map((el) => (
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
