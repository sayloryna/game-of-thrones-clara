import { characters } from "./data/data.js";
import { type Character, type Locution } from "./types";

export const getLocutions = (characters: Character[]): Locution[] =>
  characters.map((character) => character.locution);

getLocutions(characters).forEach((locution) => {
  console.log(locution);
});

getLocutions(characters);
