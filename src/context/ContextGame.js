import { createContext, useState, useEffect } from "react";

export const ContextGame = createContext();

export default ({ children }) => {

    const [ Persons, setPersons ] = useState([])
    const [ visibleEffect, setVisibleEffect ] = useState(false);

    useEffect(() => {
        let persons = JSON.parse(localStorage.getItem("persons")) || [];

        if(persons.length)
            setPersons(persons);
        else 
            window.location.assign("/");
    }, []);
    
    return (
        <ContextGame.Provider value={{ Persons, visibleEffect, setVisibleEffect }}>
            { children }
        </ContextGame.Provider>
    )
}