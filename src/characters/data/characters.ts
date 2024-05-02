import { type CharactersResponse, type Character } from "../../types.js";
export const getCharacters = async (): Promise<Character[]> => {
  const response = await fetch("http://localhost:4000/characters");
  const charactersResponse = (await response.json()) as CharactersResponse;

  return charactersResponse.characters;
};
