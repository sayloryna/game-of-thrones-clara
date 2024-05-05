import { renderUrl } from "../interactions/interactions.js";
import { type Characters, type Character } from "../types.js";

const getCharacters = async (): Promise<Character[]> => {
  const response = await fetch(renderUrl);
  const { characters } = (await response.json()) as Characters;

  return characters;
};

export default getCharacters;
