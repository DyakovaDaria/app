import { useContext } from "react";
import { ContextGame } from "../../context/ContextGame";

export default () => {
  const { setVisibleEffect } = useContext(ContextGame);

  return (
    <>
      <div className="popup-frame">
        <h3 className="text-sm text-grey t-center">Эффекты</h3>

        <select className="form-input mt20">
          <option value="1">Без сознания</option>
          <option value="2">Испуган</option>
          <option value="3">Истощён</option>
          <option value="4">Невидим</option>
          <option value="5">Недееспособен</option>
          <option value="6">Оглушён</option>
          <option value="7">Окаменел</option>
          <option value="8">Опутан</option>
          <option value="9">Ослеплён</option>
          <option value="10">Отравлен</option>
          <option value="11">Очарован</option>
          <option value="12">Ошеломлён</option>
          <option value="13">Парализован</option>
          <option value="14">Сбит с ног</option>
          <option value="15">Схвачен</option>
        </select>

        <p className="text-sm text-light t-center mt10">Длительность</p>

        <div className="fx mt10">
          <div className="w50 pr5">
            <div className="frame-area">
              <input type="number" className="noframe-input" placeholder="0" />
            </div>
          </div>
          <div className="w50 lr5">
            <button className="btn h100 popup-fx btn-inf">
              <i className="fa-solid fa-infinity icon text-light"></i>
            </button>
          </div>
        </div>

        <p className="text-sm text-light t-center mt10">раундов</p>

        <button className="btn mt40">Продолжить</button>
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
