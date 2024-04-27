import { type Character, type Locution } from "../../types.js";

export const getLocutions = (characters: Character[]): Locution[] =>
  characters.map((character) => character.locution);

export const speak = (locutions: Locution[]) => {
  locutions.forEach((locution) => {
    console.log(locution);
  });
};