import {
  type LocutionResponse,
  type Character,
  type Locution,
} from "../types.js";

const renderUrl = `https://game-of-thrones-back-4.onrender.com/characters/`;
const localHostUrl = `http://localhost:4000/characters/`;

export const speak = async (character: Character): Promise<Locution> => {
  const response = await fetch(`${renderUrl}speak/${character.id}`);

  const { locution } = (await response.json()) as LocutionResponse;

  return locution;
};

export const killCharacter = async (character: Character): Promise<void> => {
  const response = await fetch(`${renderUrl}die/${character.id}`);

  if (!response) {
    throw new Error("Character not found");
  }
};
