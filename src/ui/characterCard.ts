import { type Character } from "../types";

export const createCharacterCard = (character: Character) => {
  const characterElement = document.createElement("li");
  characterElement.classList.add("character");

  const characterPhoto = document.createElement("img");
  characterPhoto.src = character.photoSrc;
  characterPhoto.width = 100;
  characterPhoto.height = 200;

  const characterName = document.createElement("h2");
  characterName.classList.add("character__name");
  characterName.textContent = `${character.name} ${character.familyName}`;

  characterElement.appendChild(characterPhoto);
  characterElement.appendChild(characterName);

  return characterElement;
};
