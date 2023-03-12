import PopupWrap from "../PopupWrap";

import { useContext } from "react";
import { ContextGame } from "../../context/ContextGame";

import FormPerson from "./FormPerson";
import AddEffect from "./AddEffect";
// import SidebarMenu from "./SidebarMenu";

// import QRCode from "react-qr-code";

export default () => {
  const { Persons, visibleEffect } = useContext(ContextGame);

  const createInvitationString = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let counter = 0;
    while (counter < 4) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
      counter += 1;
    }
    return result;
  }

  if (!Persons.length) return null;

  return (
    <>
      <div class="horizontal-list">
        <li>{/* <SidebarMenu /> */}</li>
        <li>
          <PopupWrap customClass="pt10">
            {Persons.map((el, i) => (
              <FormPerson key={el.id} {...el} />
            ))}
          </PopupWrap>
        </li>
        <li>
          <div className="side-menu s-m-left">
            <button className="btn-rounded mt50 w80">
              Перейти к инициативе
            </button>
            <input className="comments-input mt50" placeholder="Заметки" />
            <h3 className="text-upper text-grey mt100">{createInvitationString()}</h3>
            <div>
            </div>
          </div>
        </li>
      </div>

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
