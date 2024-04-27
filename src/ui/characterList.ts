import { type Character } from "../types.js";
import { createCharacterCard } from "./characterCard.js";

export const createCharacterList = (characters: Character[]) => {
  const charactersList = document.createElement("ul");
  charactersList.classList.add("characters");

  characters.forEach((character) => {
    charactersList.appendChild(createCharacterCard(character));
  });

  return charactersList;
};
