

export default () => {
    return (
        <>
          <div className="popup-frame mt10">
            <p className="text-light">Почта</p>
            <input
              className="form-input mt10"
              type="text"
              placeholder="Боб"
            //   onChange={(e) => setPersonForm(i, "username", e.target.value)}
            />
            <p className="text-light">Пароль</p>
            <input
              className="form-input mt10"
              type="text"
              placeholder="*****"
            //   onChange={(e) => setPersonForm(i, "username", e.target.value)}
            />
          </div>
        </>
      );
}