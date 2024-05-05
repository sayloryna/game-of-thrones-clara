import { type BasicCharacter, type King } from "../types";
import { createKing, kingLocution } from "./factories.js";

describe("Given the createKing function", () => {
  describe("When it receives 'Clara', 'Fraga', 23 and 45 years of reign ", () => {
    test("Then it should return an alive 23 years old King named clara Fraga", () => {
      const characterData: BasicCharacter = {
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
        locution: kingLocution,
        totalReignYears: 45,
        isAlive: true,
      };

      const actualKing = createKing(characterData, totalReignYears);

      expect(actualKing).toMatchObject(expectedKing);
    });
  });
});
