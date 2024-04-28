import { type MegaCharacter } from "../types";

export const createCharacterCardBack = (character: Partial<MegaCharacter>) => {
  const cardBack = document.createElement("div");

  if (Object.hasOwn(character, "totalReignYears")) {
    cardBack.textContent = `Years of reign: ${character.totalReignYears}`;
  }

  if (Object.hasOwn(character, "weapon")) {
    cardBack.textContent = `Weapon: ${character.weapon}
    Dexterity: ${character.dexterityLevel}`;
  }

  if (Object.hasOwn(character, "counselledCharacter")) {
    cardBack.textContent = ``;
  }

  if (Object.hasOwn(character, "master")) {
    cardBack.textContent = "🛡️";
  }

  return cardBack;
};
