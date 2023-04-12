import { useContext, useState } from "react";
import { ContextGame } from "../../../context/ContextGame";

export default ({
  username,
  initiative,
  armor,
  health,
  initialHealth,
  isNpc,
  effects,
  id,
  concentration,
  hasCurrentTurn,
}) => {
  const { setVisibleEffect, Persons, setCurrPerson, setPersons } =
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
      <div className={`mt10 ${hasCurrentTurn ? "popup-lightning" : ""}`}>
        <div className="popup-frame br-none">
          <h3 className="text-upper text-grey">{username}</h3>

          <div className="fx mt10">
            <div className="border-frame-area mt10 t-center">
              <h3 className="text-lg text-green">
                <i className="fa-solid fa-heart mr5"></i>
                {health}
              </h3>
            </div>
            <button className="btn-shield">{armor}</button>
          </div>

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
      </div>
    </>
  );
};
