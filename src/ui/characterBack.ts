import {
  type Fighter,
  type Character,
  type King,
  type Counselor,
  type Squire,
} from "../types";

export const getCharacterCardBackData = (character: Character) => {
  const cardBack = document.createElement("div");

  if ("totalReignYears" in character) {
    const reignYears = document.createElement("p");
    reignYears.textContent = `Years of reign: ${(character as King).totalReignYears}`;
    cardBack.appendChild(reignYears);
  }

  if ("weapon" in character) {
    const weapon = document.createElement("p");
    const dexterity = document.createElement("p");

    weapon.textContent = `Weapon: "${(character as Fighter).weapon}"`;
    dexterity.textContent = `Dexterity: ${(character as Fighter).dexterityLevel}`;

    cardBack.append(weapon, dexterity);
  }

  if ("master" in character) {
    const grovelling = document.createElement("p");
    const master = document.createElement("p");

    grovelling.textContent = `Ballism level: ${(character as Squire).grovellingLevel}`;
    master.textContent = `Serves to: ${(character as Squire).master?.name} ${(character as Squire).master?.familyName}`;

    cardBack.append(grovelling, master);
  }

  if ("counselledCharacter" in character) {
    const counselledCharacter = document.createElement("p");
    counselledCharacter.textContent = `Advises to: ${(character as Counselor).counselledCharacter?.name} ${(character as Counselor).counselledCharacter?.familyName}`;
    cardBack.appendChild(counselledCharacter);
  }

  return cardBack;
};
