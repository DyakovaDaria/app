import { useContext } from "react";
import { ContextGame } from "../../../context/ContextGame";

export default ({
  username,
  lang,
  skill1,
  skill2,
  skill3,
  dropdown,
  effects,
  initiative,
  id,
}) => {
  const { setVisibleEffect, Persons, setPersons} =
    useContext(ContextGame);
  const person = Persons.find((p) => p.id === id);

  const displayPersonsEffects = () => {
    if (person) {
      return person.effects.map((effect, index) => (
        <p key={index} className="p-rounded ml5">
          {effect.type}
        </p>
      ));
    }
  };

  const changePersonInitiative = (val) => {
    const updatedPersons = Persons.map((person) => {
      if (person.id === id) {
        return {
          ...person,
          initiative: val,
        };
      } else {
        return person;
      }
    });
    setPersons(() => updatedPersons);
    localStorage.setItem("persons", JSON.stringify(updatedPersons));
  };

  return (
    <>
      <div className="popup-frame br-none mt10">
        <h3 className="text-upper text-grey">{username}</h3>

        <div className="border-frame-area mt10 t-center">
          <input
            type="number"
            className="noframe-input"
            placeholder="0"
            onChange={(e) => {
              changePersonInitiative(
                e.target.value == "" ? 0 : parseInt(e.target.value)
              );
            }}
            value={person.initiative != 0 ? person.initiative : null}
          />
          <p className="text-sm text-grey t-center">Инициатива</p>
        </div>

        <div className="frame-area mt10">
          <p className="text-sm text-grey">Состояния</p>
          <div className="fx mt10 horizontal-scroll">
            <button
              className="btn-rounded w-a"
              onClick={() => setVisibleEffect(true)}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
            {displayPersonsEffects()}
          </div>
        </div>
      </div>
    </>
  );
};
