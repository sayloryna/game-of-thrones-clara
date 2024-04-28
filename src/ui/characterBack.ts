import { type MegaCharacter } from "../types";

export const getCharacterCardBackData = (character: Partial<MegaCharacter>) => {
  const cardBack = document.createElement("div");

  if (Object.hasOwn(character, "totalReignYears")) {
    cardBack.textContent = `Years of reign: ${character.totalReignYears}`;
  }

  if (Object.hasOwn(character, "weapon")) {
    cardBack.textContent = `Weapon: ${character.weapon}
    Dexterity: ${character.dexterityLevel}`;
  }

  if (Object.hasOwn(character, "master")) {
    cardBack.textContent = `Ballism level: ${character.grovellingLevel} 
    Serves to: ${character.master?.name} ${character.master?.familyName}`;
  }

  if (Object.hasOwn(character, "counselledCharacter")) {
    cardBack.textContent = `Advises to: ${character.counselledCharacter?.name} ${character.counselledCharacter?.familyName}`;
  }

  return cardBack;
};
