import { createContext, useState, useEffect } from "react";

export const ContextGame = createContext();

export default ({ children }) => {

    const [ Persons, setPersons ] = useState([]);
    const [ visibleEffect, setVisibleEffect ] = useState(false);

    const [currPerson, setCurrPerson] = useState(0);

    useEffect(() => {
        let persons = JSON.parse(localStorage.getItem("persons")) || [];

        if(persons.length)
            setPersons(persons);
        else 
            window.location.assign("/");
    }, []);
    
    return (
        <ContextGame.Provider value={{ Persons, setPersons, visibleEffect, setVisibleEffect, currPerson, setCurrPerson }}>
            { children }
        </ContextGame.Provider>
    )
}