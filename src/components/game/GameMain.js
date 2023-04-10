import PopupWrap from "../PopupWrap";

import { useContext, useState } from "react";
import { ContextGame } from "../../context/ContextGame";

import FormPerson from "./standardMode/FormPerson";
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
        <PopupWrap customClass="pt10">
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
