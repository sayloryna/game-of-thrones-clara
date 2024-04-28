import { type Character } from "../types";

export const createCharacterCard = (character: Character) => {
  const characterElement = document.createElement("div");
  characterElement.classList.add("character");

  const characterPhoto = addCharacterPhoto(character);

  const characterMainDataContainer = document.createElement("div");
  characterMainDataContainer.classList.add("character__main-data");

  const characterName = document.createElement("h2");
  characterName.classList.add("character__name");
  characterName.textContent = `${character.name} ${character.familyName}`;

  const characterAge = document.createElement("p");
  characterAge.classList.add("character__age");
  characterAge.textContent = `Age: ${character.age} years`;

  const characterStatus = document.createElement("div");
  const statusIcon = getStatusIcon(character);

  characterStatus.classList.add("character__status");
  characterStatus.textContent = "Status:";

  const characterMark = document.createElement("div");
  characterMark.classList.add("character__mark");
  characterMark.innerText = getCharacterKindMark(character);

  characterStatus.appendChild(statusIcon);

  characterMainDataContainer.appendChild(characterName);
  characterMainDataContainer.appendChild(characterAge);
  characterMainDataContainer.appendChild(characterStatus);
  characterMainDataContainer.appendChild(characterMark);

  characterElement.appendChild(characterPhoto);
  characterElement.appendChild(characterMainDataContainer);

  return characterElement;
};

const addCharacterPhoto = (character: Character): HTMLImageElement => {
  const characterPhoto = document.createElement("img");
  characterPhoto.classList.add("character__photo");
  characterPhoto.src = character.photoSrc;
  characterPhoto.width = 300;
  characterPhoto.height = 255;
  characterPhoto.alt = `${character.name} ${character.familyName}`;
  return characterPhoto;
};

const getStatusIcon = (character: Character): HTMLImageElement => {
  const characterIconSrc = character.isAlive
    ? "images/icons/thumb-up-fill.svg"
    : "images/icons/thumb-down-fill.svg";

  const statusIcon = document.createElement("img");
  statusIcon.alt =
    characterIconSrc === "images/icons/thumb-up-fill.svg"
      ? "thumbs-up hand"
      : "thumbs-down hand";
  statusIcon.src = characterIconSrc;
  statusIcon.width = 25;
  statusIcon.height = 25;

  return statusIcon;
};

export const getCharacterKindMark = (character: Character) => {
  let mark = "";
  if (Object.hasOwn(character, "totalReignYears")) {
    mark = "👑";
  }

  if (Object.hasOwn(character, "weapon")) {
    mark = "🗡";
  }

  if (Object.hasOwn(character, "counselledCharacter")) {
    mark = "🎓";
  }

  if (Object.hasOwn(character, "master")) {
    mark = "🛡️";
  }

  return mark;
};
