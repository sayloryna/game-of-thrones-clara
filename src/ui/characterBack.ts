import { type MegaCharacter } from "../types";

export const getCharacterCardBackData = (character: Partial<MegaCharacter>) => {
  const cardBack = document.createElement("div");

  if (Object.hasOwn(character, "totalReignYears")) {
    const reignYears = document.createElement("p");
    reignYears.textContent = `Years of reign: ${character.totalReignYears}`;
    cardBack.appendChild(reignYears);
  }

  if (Object.hasOwn(character, "weapon")) {
    const weapon = document.createElement("p");
    const dexterity = document.createElement("p");

    weapon.textContent = `Weapon: "${character.weapon}"`;
    dexterity.textContent = `Dexterity: ${character.dexterityLevel}`;

    cardBack.append(weapon, dexterity);
  }

  if (Object.hasOwn(character, "master")) {
    const ballism = document.createElement("p");
    const master = document.createElement("p");

    ballism.textContent = `Ballism level: ${character.grovellingLevel}`;
    master.textContent = `Serves to: ${character.master?.name} ${character.master?.familyName}`;

    cardBack.append(ballism, master);
  }

  if (Object.hasOwn(character, "counselledCharacter")) {
    const counselledCharacter = document.createElement("p");
    counselledCharacter.textContent = `Advises to: ${character.counselledCharacter?.name} ${character.counselledCharacter?.familyName}`;
    cardBack.appendChild(counselledCharacter);
  }

  return cardBack;
};
