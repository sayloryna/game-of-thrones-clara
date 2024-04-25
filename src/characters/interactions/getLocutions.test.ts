import { daenerysTargaryen, tyrionLannister } from "../data/characters.js";
import { getLocutions } from "./interactions.js";
import { type Character, type Locution } from "../../types.js";

describe("Given the getLocutions function", (): void => {
  describe("When it receives a list with a fighter and a counselor", (): void => {
    test("Then it should return a list with 'Primero pego y luego pregunto' y 'No sé por qué, pero creo que voy a morir pronto'", (): void => {
      const testCharacters: Character[] = [daenerysTargaryen, tyrionLannister];
      const expectedLocutions: string[] = [
        "Primero pego y luego pregunto",
        "No sé por qué, pero creo que voy a morir pronto",
      ];

      const actualLocutions: Locution[] = getLocutions(testCharacters);

      expect(actualLocutions).toEqual(expectedLocutions);
    });
  });

  describe("When it receives a characters  empty list", (): void => {
    test("Then it should return a locutions empty list", (): void => {
      const emptycharacterList: Character[] = [];

      const expectedLocutions: Locution[] = [];
      const actualLocutions = getLocutions(emptycharacterList);

      expect(actualLocutions).toEqual(expectedLocutions);
    });
  });
});
