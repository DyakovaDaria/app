export default () => {
  const AccList = [
    {
      title: "Без сознания",
      text: "какое-то пояснение",
    },
    {
      title: "Испуган",
      text: "какое-то пояснение",
    },
    {
      title: "Истощён",
      text: "какое-то пояснение",
    },
    {
      title: "Невидим",
      text: "какое-то пояснение",
    },
    {
      title: "Недееспособен",
      text: "какое-то пояснение",
    },
    {
      title: "Оглушён",
      text: "какое-то пояснение",
    },
    {
      title: "Окаменел",
      text: "какое-то пояснение",
    },
    {
      title: "Опутан",
      text: "какое-то пояснение",
    },
    {
      title: "Ослеплён",
      text: "какое-то пояснение",
    },
    {
      title: "Отравлен",
      text: "какое-то пояснение",
    },
    {
      title: "Очарован",
      text: "какое-то пояснение",
    },
    {
      title: "Ошеломлён",
      text: "какое-то пояснение",
    },
    {
      title: "Парализован",
      text: "какое-то пояснение",
    },
    {
      title: "Сбит с ног",
      text: "какое-то пояснение",
    },
    {
      title: "Схвачен",
      text: "какое-то пояснение",
    },
  ];

  const toggleAccordion = function (target) {
    target.children[1].classList.toggle("open-dropdown");
    target.nextElementSibling.classList.toggle("open-text");
  };

  return (
    <>
      <div className="sidebar sidebar-l pt20">
        <h3 className="text-sm text-grey t-center">Эффекты</h3>

        <div className="accordion text-grey mt30">
          {AccList.map((el) => (
            <div>
              <div
                className="acc-title"
                onClick={(e) => toggleAccordion(e.target)}
              >
                <p className="text-sm">{el.title}</p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <p className="acc-text text-sm">{el.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
