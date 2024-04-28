import { type Character } from "../types";

export const createCharacterCard = (character: Character) => {
  const characterElement = document.createElement("li");
  characterElement.classList.add("character");

  const characterPhoto = document.createElement("img");
  characterPhoto.classList.add("character__photo");
  characterPhoto.src = character.photoSrc;
  characterPhoto.width = 300;
  characterPhoto.height = 255;

  const characterMainDataContainer = document.createElement("div");
  characterMainDataContainer.classList.add("character__main-data");

  const characterName = document.createElement("h2");
  characterName.classList.add("character__name");
  characterName.textContent = `${character.name} ${character.familyName}`;

  const characterAge = document.createElement("p");
  characterAge.classList.add("character__age");
  characterAge.textContent = `Age: ${character.age} years`;

  const characterStatus = document.createElement("div");
  characterStatus.classList.add("character__status");
  characterStatus.textContent = "Status:";
  const characterIconSrc = character.isAlive
    ? "images/icons/thumb-up-fill.svg"
    : "images/icons/thumb-down-fill.svg";

  const statusIcon = document.createElement("img");
  statusIcon.src = characterIconSrc;
  statusIcon.width = 25;
  statusIcon.height = 25;

  characterElement.appendChild(characterPhoto);
  characterStatus.appendChild(statusIcon);
  characterMainDataContainer.appendChild(characterName);
  characterMainDataContainer.appendChild(characterAge);
  characterMainDataContainer.appendChild(characterStatus);
  characterElement.appendChild(characterMainDataContainer);

  return characterElement;
};
