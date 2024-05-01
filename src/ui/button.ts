import { type Character } from "../types";

export const createButton = (
  className: string,
  text: string,
): HTMLButtonElement => {
  const button = document.createElement("button");
  button.classList.add("button");

  button.classList.add(className);
  button.textContent = text.toLowerCase();
  return button;
};

export const killCharacter = (character: Character) => {
  character.die();
};

export const makeCharacterSpeak = (character: Character) => character.speak();
