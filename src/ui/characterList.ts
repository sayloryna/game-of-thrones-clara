import { type Character } from "../characters/types.js";
import { createCharacterCard } from "./characterCard.js";

export const createCharacterList = (characters: Character[]) => {
  const charactersList = document.createElement("ul");
  charactersList.classList.add("characters");

  characters.forEach((character) => {
    const characterElement = document.createElement("li");
    characterElement.appendChild(createCharacterCard(character));
    charactersList.appendChild(characterElement);
  });

  return charactersList;
};
