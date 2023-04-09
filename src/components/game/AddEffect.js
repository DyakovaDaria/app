import { useContext, useState } from "react";
import { ContextGame } from "../../context/ContextGame";

export default () => {
  const { setVisibleEffect, currPerson, Persons, setPersons } =
    useContext(ContextGame);

  const [effect, setEffects] = useState("Без сознания");
  const [effDuration, setDuration] = useState(0);
  const [placeholderText, setPlaceholderText] = useState(0);

  return (
    <>
      <div className="popup-frame">
        <h3 className="text-sm text-grey t-center">Эффекты</h3>

        <select
          className="form-input mt20"
          onChange={(e) => setEffects(e.target.value)}
        >
          <option value="Без сознания">Без сознания</option>
          <option value="Испуган">Испуган</option>
          <option value="Истощён">Истощён</option>
          <option value="Невидим">Невидим</option>
          <option value="Недееспособен">Недееспособен</option>
          <option value="Оглушён">Оглушён</option>
          <option value="Окаменел">Окаменел</option>
          <option value="Опутан">Опутан</option>
          <option value="Ослеплён">Ослеплён</option>
          <option value="Отравлен">Отравлен</option>
          <option value="Очарован">Очарован</option>
          <option value="Ошеломлён">Ошеломлён</option>
          <option value="Парализован">Парализован</option>
          <option value="Сбит с ног">Сбит с ног</option>
          <option value="Схвачен">Схвачен</option>
        </select>

        <p className="text-sm text-light t-center mt10">Длительность</p>

        <div className="fx mt10">
          <div className="w50 pr5">
            <div className="frame-area">
              <input
                type="number"
                className="noframe-input"
                placeholder="0"
                value={placeholderText}
                onChange={(e) => {
                  setDuration(parseInt(e.target.value));
                  setPlaceholderText(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="w50 lr5">
            <button className="btn h100 popup-fx btn-inf">
              <i
                className="fa-solid fa-infinity icon text-light"
                onClick={() => {
                  setDuration(99999);
                  setPlaceholderText("99999");
                }}
              ></i>
            </button>
          </div>
        </div>

        <p className="text-sm text-light t-center mt10">раундов</p>

        <button
          className="btn mt40"
          onClick={() => {
            const newEffect = { type: effect, duration: effDuration };
            const updatedPersons = Persons.map((person) => {
              if (person.id === currPerson) {
                return {
                  ...person,
                  effects: [...person.effects, newEffect],
                };
              } else {
                return person;
              }
            });
            setPersons(() => updatedPersons);
            localStorage.setItem("persons", JSON.stringify(updatedPersons));
            setVisibleEffect(false);
          }}
        >
          Продолжить
        </button>
        <button
          className="btn-outline mt10"
          onClick={() => setVisibleEffect(false)}
        >
          Отмена
        </button>
      </div>
    </>
  );
};
