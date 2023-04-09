import PopupWrap from "../PopupWrap";
import pic1 from "../../img/home-pic1.png";
import pic2 from "../../img/home-pic2.png";

export default () => {
    return (
        <div>
          <div>
            <img className="img-first" src={pic1} />
          </div>
          <PopupWrap customClass="popup-fx">
            <button
              className="btn create-game"
              onClick={window.location.assign("/auth")}
            >
              Создать игрy
            </button>
          </PopupWrap>
          <div>
            <img className="img-second" src={pic2} />
          </div>
        </div>
    )
}