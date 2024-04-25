import {
  type CharacterWithoutMethods,
  type King,
  kingLocution,
} from "../../types";
import { createKing } from "./factories";

describe("Given the createKing function", () => {
  describe("When it receives 'Clara', 'Fraga', 23, a kingLocution and 45 years of reign ", () => {
    test("Then it should return an alive 23 years old King named clara Fraga", () => {
      const characterData: CharacterWithoutMethods = {
        name: "Clara",
        familyName: "Fraga",
        age: 23,
        locution: kingLocution,
      };
      const totalReignYears = 45;

      const expectedKing: Omit<King, "speak" | "die"> = {
        name: "Clara",
        familyName: "Fraga",
        age: 23,
        locution: kingLocution,
        totalReignYears: 45,
        isAlive: true,
      };

      const actualKing = createKing(characterData, totalReignYears);

      expect(actualKing).toMatchObject(expectedKing);
    });
  });
});
