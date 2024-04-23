import { daenerysTargaryen, tyrionLannister } from "../data/data";
import { getLocutions } from "../interactions";
import { type Character } from "../types";

describe("Given the getLocutions function", (): void => {
  describe("When it receives a list of characters", (): void => {
    test("Then it should return a list of the characters locutions", (): void => {
      const testCharacters: Character[] = [daenerysTargaryen, tyrionLannister];
      const expectedLocutions: string[] = [
        "Primero pego y luego pregunto",
        "No sé por qué, pero creo que voy a morir pronto",
      ];

      const actualLocutions: string[] = getLocutions(testCharacters);

      expect(actualLocutions).toEqual(expectedLocutions);
    });
  });
});
