import {
  type LocutionResponse,
  type Character,
  type Locution,
} from "../types.js";

export const speak = async (character: Character): Promise<Locution> => {
  const response = await fetch(
    `https://game-of-thrones-back-4.onrender.com/characters/${character.id}`,
  );
  const { locution } = (await response.json()) as LocutionResponse;

  return locution;
};
