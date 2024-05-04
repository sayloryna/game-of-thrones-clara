import { type Characters, type Character } from "../types.js";

export const getCharacters = async (): Promise<Character[]> => {
  const response = await fetch(
    "https://game-of-thrones-back-4.onrender.com/characters",
  );
  const { characters } = (await response.json()) as Characters;

  return characters;
};
