import AuthorizationForm from "./AuthorizationForm"
import PopupWrap from "../PopupWrap";

export default () => {
  const acceptButtonClick = () => {
    window.location.assign("/home");
  }
    return (
        <PopupWrap customClass="popup-fx">
          <AuthorizationForm />

          <button className="btn mt30" onClick={acceptButtonClick}>
            Войти
          </button>

          {/* <p className="text-err t-center mt10">{err}</p> */}
        </PopupWrap>
    )
}