import { createContext, useState } from "react";

export const ContextCreate = createContext();

export default ({ children }) => {
  const schemaPerson = {
    username: "",
    lang: "",
    skill1: "",
    skill2: "",
    skill3: "",
    dropdown: false,
    effects: [],
    initiative: 0,
    id: 0,
    isNpc: false,
  };

  const [step, setStep] = useState(0);
  const [Persons, setPersons] = useState([
    { ...schemaPerson, id: Date.now().toString() },
  ]);
  const [err, setErr] = useState("");

  const addPerson = () => {
    setPersons([...Persons, { ...schemaPerson, id: Date.now().toString() }]);
  };

  const toggleDropdown = (i) => {
    const modifyPersons = [...Persons];
    modifyPersons[i].dropdown = !modifyPersons[i].dropdown;

    setPersons([...modifyPersons]);
  };

  const setPersonForm = (i, key, value) => {
    const modifyPersons = [...Persons];
    modifyPersons[i][key] = value;

    setPersons([...modifyPersons]);
  };

  const submitPersonForm = () => {
    for (let person of Persons) {
      for (let key in person) {
        if (key != "dropdown" && key != "effects" && key != "initiative" && key != "id" && key != "isNpc") {
          if (person[key].trim() == "") return setErr("Заполните все поля");
        }
      }
    }

    const createInvitationString = () => {
      let result = "";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let counter = 0;
      while (counter < 4) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        counter += 1;
      }
      return result;
    };

    localStorage.setItem("persons", JSON.stringify(Persons));
    localStorage.setItem("qr", createInvitationString());

    window.location.assign("/game");
  };

  return (
    <ContextCreate.Provider
      value={{
        step,
        setStep,
        Persons,
        addPerson,
        toggleDropdown,
        setPersonForm,
        submitPersonForm,
        err,
      }}
    >
      {children}
    </ContextCreate.Provider>
  );
};
