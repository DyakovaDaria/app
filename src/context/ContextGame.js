import { createContext, useState, useEffect } from "react";

export const ContextGame = createContext();

export default ({ children }) => {
  const [Persons, setPersons] = useState([]);
  const [visibleEffect, setVisibleEffect] = useState(false);
  const [visibleNpcCreate, setVisibleNpcCreate] = useState(false);
  const [isInitiative, setInitiative] = useState(false);

  useEffect(() => {
    let persons = JSON.parse(localStorage.getItem("persons")) || [];

    if (persons.length) setPersons(persons);
    else window.location.assign("/");
  }, []);

  return (
    <ContextGame.Provider
      value={{
        Persons,
        setPersons,
        visibleEffect,
        setVisibleEffect,
        isInitiative,
        setInitiative,
        visibleNpcCreate,
        setVisibleNpcCreate,
      }}
    >
      {children}
    </ContextGame.Provider>
  );
};
