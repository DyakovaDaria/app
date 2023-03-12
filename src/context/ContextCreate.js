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
    effects: {
      type: "",
      duration: 0,
    }
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
        if (key != "dropdown" && key != "effects") {
          if (person[key].trim() == "") return setErr("Error inputs");
        }
      }
    }

    localStorage.setItem("persons", JSON.stringify(Persons));

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
