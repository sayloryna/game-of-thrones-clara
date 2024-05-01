import { createAction } from "node-git-server";
import { type Character } from "../types";
import { createButton } from "./button.js";
import { getCharacterCardBackData } from "./characterBack.js";

export const createCharacterCard = (character: Character) => {
  const characterCard = document.createElement("article");
  characterCard.classList.add("character");

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
  let statusIcon = getStatusIcon(character);

  characterStatus.classList.add("character__status");
  characterStatus.textContent = "State:";

  const characterMark = document.createElement("div");
  characterMark.classList.add("character__mark");
  characterMark.innerText = getCharacterKindMark(character);

  const backDataContainer = document.createElement("div");
  const backData = getCharacterCardBackData(character);
  backDataContainer.classList.add("character__back");
  backData.classList.add("character__extra-data");

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  const speakButton = createButton("button__speak", "speak");

  speakButton.addEventListener("click", () => {
    const characterHasSpoken = backDataContainer.querySelector(".has-spoken");

    if (characterHasSpoken) {
      return;
    }

    const locution = character.speak();

    const locutionCointainer = document.createElement("span");

    locutionCointainer.classList.add("character__locution");
    locutionCointainer.classList.add("has-spoken");

    locutionCointainer.textContent = character.isAlive
      ? `${character.name} says: "${locution}"`
      : `-Dead people can't speak-`;

    backData.appendChild(locutionCointainer);
  });

  const dieButton = createButton("button__die", "die");

  dieButton.addEventListener("click", () => {
    character.die();
    characterPhoto.classList.add("character__photo--dead");
    characterStatus.querySelector(".character__status-icon")?.remove();

    statusIcon = getStatusIcon(character);
    characterStatus.appendChild(statusIcon);
  });

  buttons.append(speakButton, dieButton);

  backDataContainer.append(backData, buttons);

  characterStatus.appendChild(statusIcon);

  characterMainDataContainer.append(
    characterName,
    characterAge,
    characterStatus,
    characterMark,
  );

  characterCard.append(
    characterPhoto,
    characterMainDataContainer,
    backDataContainer,
  );

  return characterCard;
};

const addCharacterPhoto = (character: Character): HTMLImageElement => {
  const characterPhoto = document.createElement("img");
  characterPhoto.classList.add("character__photo");
  characterPhoto.src = character.photoSrc;
  characterPhoto.width = 300;
  characterPhoto.height = 255;
  characterPhoto.alt = `${character.name} ${character.familyName}`;
  if (!character.isAlive) {
    characterPhoto.classList.add("character__photo--dead");
  }

  return characterPhoto;
};

const getStatusIcon = (character: Character): HTMLImageElement => {
  const characterIconSrc = character.isAlive
    ? "images/icons/thumb-up-fill.svg"
    : "images/icons/thumb-down-fill.svg";

  const statusIcon = document.createElement("img");
  statusIcon.classList.add("character__status-icon");
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
