import PopupWrap from "../PopupWrap";

import { useContext } from "react";
import { ContextGame } from "../../context/ContextGame";

import FormPerson from "./FormPerson";
import AddEffect from "./AddEffect";

import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

export default () => {
  const { Persons, visibleEffect } = useContext(ContextGame);

  if (!Persons.length) return null;

  return (
    <>
      <SidebarLeft />

      <SidebarRight />

      <PopupWrap customClass="pt10">
        {Persons.map((el, i) => (
          <FormPerson key={el.id} {...el} />
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
