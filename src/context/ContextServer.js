import io from "socket.io-client";
import { createContext, useState } from "react";
import NonPlayableCharacterModel from "../models/NonPlayableCharacterModel";
import PlayableCharacterModel from "../models/PlayableCharacterModel";

export const ContextServer = createContext();

export default ({ children }) => {
  const socket = io("http://localhost:4000");

  const [invitationCode, setInvitationCode] = useState("");

  const getCharactersList = (Persons) => {
    let charactersList = [];
    for (let index = 0; index < Persons.length; index++) {
      const element = Persons[index];
      const newPerson = element.isNpc
        ? new NonPlayableCharacterModel(
            element.username,
            element.initiative,
            element.armor,
            element.health
          )
        : new PlayableCharacterModel(
            element.username,
            element.lang,
            element.skill1,
            element.skill2,
            element.skill3,
            element.initiative
          );
      charactersList = [
        ...charactersList,
        {
          ...newPerson,
          hasCurrentTurn: element.hasCurrentTurn,
          concentration: element.concentration,
          effects: element.effects,
        },
      ];
    }
    return charactersList;
  };

  const updatePersons = (Persons, code) => {
    socket.emit("refreshCharacters", getCharactersList(Persons), code);
  };

  const deleteGame = (code) => {
    socket.emit("deleteGame", code);
  };

  const createGame = (Persons) => {
    console.log(getCharactersList(Persons));
    socket.emit("createGame", getCharactersList(Persons));
  };

  const getInvitationCode = () => {
    socket.on("createdGame", (roomName) => {
      setInvitationCode(roomName);
    });
    return invitationCode;
  };

  return (
    <ContextServer.Provider
      value={{
        updatePersons,
        deleteGame,
        createGame,
        getInvitationCode,
        invitationCode,
      }}
    >
      {children}
    </ContextServer.Provider>
  );
};
