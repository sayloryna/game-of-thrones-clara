import { type CharacterWithoutMethodsAndStatus, type King } from "../types";
import { createKing } from "./factories.js";

describe("Given the createKing function", () => {
  describe("When it receives 'Clara', 'Fraga', 23 and 45 years of reign ", () => {
    test("Then it should return an alive 23 years old King named clara Fraga", () => {
      const characterData: CharacterWithoutMethodsAndStatus = {
        id: "",
        name: "Clara",
        familyName: "Fraga",
        age: 23,
        photoSource: "",
      };
      const totalReignYears = 45;

      const expectedKing: Omit<King, "speak" | "die"> = {
        id: "",
        name: "Clara",
        familyName: "Fraga",
        age: 23,
        photoSource: "",
        totalReignYears: 45,
        isAlive: true,
      };

      const actualKing = createKing(characterData, totalReignYears);

      expect(actualKing).toMatchObject(expectedKing);
    });
  });
});
