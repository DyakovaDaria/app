import QRCode from "react-qr-code";

export default () => {
  const qr = localStorage.getItem("qr");

  return (
    <>
      <div className="sidebar sidebar-r pt40">
        <button className="btn-rounded">Перейти к инициативе</button>

        <div className="frame-area br-none mt50">
          <p className="text-sm text-grey">Заметки</p>
          <textarea
            placeholder="Можете оставить здесь свои заметки"
            className="noframe-input mt10"
          ></textarea>
        </div>
        <div className="t-center mt30">
          <QRCode
            size={68}
            value={qr}
            viewBox={`0 0 256 256`}
            bgColor={"transparent"}
            fgColor={"#ffffff"}
          />
          <p className="text-upper text-grey">{qr}</p>
        </div>
      </div>
    </>
  );
};
