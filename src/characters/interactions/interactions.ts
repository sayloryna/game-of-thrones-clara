import { type Character, type Locution } from "../types.js";
export const renderUrl = `https://game-of-thrones-back-4.onrender.com/characters/`;
export const localHostUrl = `http://localhost:4000/characters/`;

export const killCharacter = async (character: Character): Promise<void> => {
  const response = await fetch(`${renderUrl}die/${character.id}`);

  if (!response) {
    throw new Error("Character not found");
  }
};
