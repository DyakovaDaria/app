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
  isNpc,
  concentration,
  hasCurrentTurn,
}) => {
  const { setVisibleEffect, Persons, setPersons, setCurrPerson } =
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

  return (
    <>
      <div className="popup-frame br-none mt10">
        <h3 className="text-upper text-grey">{username}</h3>

        <div className="frame-area mt10">
          <p className="text-sm text-grey">Состояния</p>
          <div className="fx mt10 horizontal-scroll">
            <button
              className="btn-rounded w-a"
              onClick={() => {
                setVisibleEffect(true);
                setCurrPerson(id);
              }}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
            {displayPersonsEffects()}
          </div>
        </div>

        <button
          className={`mt10 ${
            concentration ? "btn-rounded-green" : "btn-rounded-grey"
          }`}
          onClick={() => {
            const updatedPersons = Persons.map((person) => {
              if (person.id === id) {
                return {
                  ...person,
                  concentration: !person.concentration,
                };
              } else {
                return person;
              }
            });
            setPersons(() => updatedPersons);
            localStorage.setItem("persons", JSON.stringify(updatedPersons));
          }}
        >
          Концентрация
        </button>
      </div>
    </>
  );
};
