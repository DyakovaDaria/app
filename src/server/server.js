import io from "socket.io-client";
import NonPlayableCharacterModel from "../models/NonPlayableCharacterModel";
import PlayableCharacterModel from "../models/PlayableCharacterModel";

const socket = io("http://localhost:3000");

const updatePersons = (Persons, code) => {
  const charactersList = [];
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
  socket.emit("refreshCharacters", charactersList, code);
};

const deleteGame = (code) => {
    socket.emit("deleteGame", code);
}
