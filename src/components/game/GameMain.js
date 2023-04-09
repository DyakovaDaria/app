import PopupWrap from "../PopupWrap";

import { useContext } from "react";
import { ContextGame } from "../../context/ContextGame";

import FormPerson from "./FormPerson";
import AddEffect from "./AddEffect";

import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

export default () => {
  const { Persons, visibleEffect, setCurrPerson } = useContext(ContextGame);

  if (!Persons.length) return null;

  return (
    <>
      <SidebarLeft />

      <SidebarRight />

      <PopupWrap customClass="pt10">
        {Persons.map((el) => (
          <FormPerson key={el.id} {...el} onClick={setCurrPerson(el.id)} />
        ))}
      </PopupWrap>

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
