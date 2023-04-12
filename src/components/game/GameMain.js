import PopupWrap from "../PopupWrap";

import { useContext, useState } from "react";
import { ContextGame } from "../../context/ContextGame";

import FormPerson from "./standardMode/FormPlayablePerson";
import AddEffect from "./standardMode/AddEffect";
import InitiativeFormPerson from "./initiativeMode/InitiativeFormPerson";

import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

export default () => {
  const { Persons, visibleEffect, setCurrPerson, isInitiative } = useContext(ContextGame);


  if (!Persons.length) return null;

  return (
    <>
      <SidebarLeft />

      <SidebarRight />

      {isInitiative ? (
        <PopupWrap customClass="pt10 popup-fx">
          <button className="btn-circle add-person">
            <i className="fa-solid fa-plus"></i>
          </button>
          <div className="btn-r-inf add-person mt60">
            <p className="text-round text-light">0</p>
          </div>
          <div className="btn-r-inf add-person mt90">
          <p className="text-sm text-light">раунд</p>
          </div>
          <button className="btn-circle add-person mt150">
            <i className="fa-solid fa-angle-down"></i>
          </button>
          {Persons.map((el) => (
            <InitiativeFormPerson key={el.id} {...el} onClick={setCurrPerson(el.id)} />
          ))}
        </PopupWrap>
      ) : (
        <PopupWrap customClass="pt10">
          {Persons.map((el) => (
            <FormPerson key={el.id} {...el} onClick={setCurrPerson(el.id)} />
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
    </>
  );
};
