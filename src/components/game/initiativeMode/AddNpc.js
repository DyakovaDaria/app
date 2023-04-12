import { useContext, useState } from "react";
import { ContextGame } from "../../../context/ContextGame";
import NonPlayableCharacterModel from "../../../models/NonPlayableCharacterModel";

export default () => {
  const { setVisibleNpcCreate, currPerson, Persons, setPersons } =
    useContext(ContextGame);

  const schemaNpc = {
    username: "",
    initiative: "",
    armor: "",
    health: "",
    initialHealth: "",
    isNpc: true,
    effects: [],
    id: 0,
  };

  const [npcName, setNpcName] = useState("");
  const [health, setHealth] = useState(0);
  const [armor, setArmor] = useState(0);
  const [npcInitiative, setNpcInitiative] = useState(0);

  return (
    <>
      <div className="popup-frame">
        <h3 className="text-sm text-grey t-center">Добавить НПС</h3>
        <p className="text-light">Имя или название</p>
        <input
          className="form-input mt10"
          type="text"
          placeholder="Боб"
          onChange={(e) => setNpcName(e.target.value)}
        />

        <div className="fx mt10">
          <p className="text-sm text-light mt10">Инициатива</p>
          <p className="text-sm text-light mt10 ml65">Броня</p>
          <p className="text-sm text-light mt10 ml100">Здоровье</p>
        </div>

        <div className="fx mt10">
          <div className="w25 pr5">
            <div className="frame-area">
              <input
                type="number"
                className="noframe-input"
                placeholder="0"
                onChange={(e) => {
                  setNpcInitiative(parseInt(e.target.value));
                }}
              />
            </div>
          </div>

          <div className="w25 pr5 ml70">
            <div className="frame-area">
              <input
                type="number"
                className="noframe-input"
                placeholder="0"
                onChange={(e) => {
                  setArmor(parseInt(e.target.value));
                }}
              />
            </div>
          </div>

          <div className="w25 pr5 ml70">
            <div className="frame-area">
              <input
                type="number"
                className="noframe-input"
                placeholder="0"
                onChange={(e) => {
                  setHealth(parseInt(e.target.value));
                }}
              />
            </div>
          </div>
        </div>

        <button
          className="btn mt40 w45"
          onClick={() => {
            const updatedPersons = [
              ...Persons,
              {
                ...schemaNpc,
                id: Date.now().toString(),
                username: npcName,
                initiative: npcInitiative,
                armor: armor,
                health: health,
                initialHealth: health,
              },
            ];
            setPersons(() => updatedPersons);
            localStorage.setItem("persons", JSON.stringify(updatedPersons));
            setVisibleNpcCreate(false);
          }}
        >
          Продолжить
        </button>
        <button
          className="btn-outline mt10 w45 ml35"
          onClick={() => setVisibleNpcCreate(false)}
        >
          Отмена
        </button>
      </div>
    </>
  );
};
