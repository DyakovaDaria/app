import PopupWrap from "../PopupWrap";

import { useContext } from "react";
import { ContextCreate } from "../../context/ContextCreate";

import FormPerson from "./FormPerson";

import pic1 from "../../img/home-pic1.png";
import pic2 from "../../img/home-pic2.png";

export default () => {
  const { step, setStep, Persons, addPerson, submitPersonForm, err } =
    useContext(ContextCreate);

  console.log(Persons);

  return (
    <>
      {step == 0 ? (
        <div>
          <div>
            <img className="img-first" src={pic1} />
          </div>
          <PopupWrap customClass="popup-fx">
            <button
              className="btn create-game"
              onClick={() => setStep(step + 1)}
            >
              Создать игрy
            </button>
          </PopupWrap>
          <div>
            <img className="img-second" src={pic2} />
          </div>
        </div>
      ) : step == 1 ? (
        <PopupWrap customClass="popup-fx">
          <button className="btn-circle add-person" onClick={() => addPerson()}>
            <i className="fa-solid fa-plus"></i>
          </button>

          {Persons.map((el, i) => (
            <FormPerson key={el.id} dropdown={el.dropdown} i={i} />
          ))}

          <button className="btn mt30" onClick={() => submitPersonForm()}>
            Начать игру
          </button>

          <p className="text-err t-center mt10">{err}</p>
        </PopupWrap>
      ) : null}
    </>
  );
};
