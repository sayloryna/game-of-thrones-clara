import { type Character, type Locution } from "../../types.js";

export const getLocutions = (characters: Character[]) =>
  characters.map((persona) => persona.speak());

export const speak = (locutions: Locution[]) => {
  locutions.forEach((locution) => {
    console.log(locution);
  });
};
