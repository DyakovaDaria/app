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
  const { setVisibleEffect, Persons } = useContext(ContextGame);
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

        <div className="fx mt10">
          <div className="border-frame-area mt10 t-center">
            <h3 className="text-lg text-green">
              <i className="fa-solid fa-heart mr5"></i>
              11
            </h3>
          </div>
            <button className="btn-shield">19</button>
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
        <button className="btn-rounded-grey mt10">Концентрация</button>
      </div>
    </>
  );
};
