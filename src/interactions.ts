import { characters } from "./data/data.js";
import { type Character, type Locution } from "./types";

export const getLocutions = (characters: Character[]): Locution[] =>
  characters.map((character) => character.locution);

const speak = (locutions: Locution[]) => {
  locutions.forEach((locution) => {
    console.log(locution);
  });
};
