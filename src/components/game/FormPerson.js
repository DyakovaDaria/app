import { useContext } from "react";
import { ContextGame } from "../../context/ContextGame";

export default ({ username, lang, skill1, skill2, skill3, dropdown, effects, initiative, id }) => {
  const { setVisibleEffect } = useContext(ContextGame);

  return (
    <>
      <div className="popup-frame br-none mt10">
        <h3 className="text-upper text-grey">{username}</h3>
        <div className="frame-area mt10">
          <p className="text-sm text-grey">Состояния</p>
          <div className="fx mt10">
            <button
              className="btn-rounded w-a"
              onClick={() => setVisibleEffect(true)}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>

        <div className="fx mt10 t-center">
          <div className="w50 pr5">
            <div className="frame-area">
              <h4 className="text-lg text-light">{skill1}</h4>
              <p className="text-sm text-grey">Проницательность</p>
            </div>
          </div>
          <div className="w50 pl5">
            <div className="frame-area">
              <h4 className="text-lg text-light">{skill2}</h4>
              <p className="text-sm text-grey">Внимание</p>
            </div>
          </div>
        </div>

        <div className="frame-area mt10 t-center">
          <h4 className="text-lg text-light">{skill3}</h4>
          <p className="text-sm text-grey">Расследование</p>
        </div>

        <p className="text-sm text-grey mt20">Языки</p>
        <p className="text-light mt10">{lang}</p>
      </div>
    </>
  );
};
