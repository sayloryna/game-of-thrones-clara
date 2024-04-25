import {
  counselorLocution,
  type Fighter,
  fighterLocution,
  type CharacterWithoutMethods,
  type Counselor,
} from "../../types.js";
import { createCounselor } from "./factories.js";

describe("Given a createCounselor function", () => {
  describe("When it receives a 23 years old character named Clara Fraga,  who counsels another character", () => {
    test("Then it should return a 23 YO counselor named Clara Fraga and cousels another character", () => {
      const character: CharacterWithoutMethods = {
        name: "Clara",
        familyName: "Fraga",
        age: 23,
        locution: counselorLocution,
      };

      const counselledCharacter: Fighter = {
        name: "Daenerys",
        familyName: "Targaryen",
        age: 23,
        isAlive: true,
        locution: fighterLocution,
        weapon: "Drogon",
        dexterityLevel: 0,
        die(this: Counselor) {
          this.isAlive = false;
        },
        speak() {
          return counselorLocution;
        },
      };
      const expectedCounselor: Omit<Counselor, "speak" | "die"> = {
        name: "Clara",
        familyName: "Fraga",
        age: 23,
        isAlive: true,
        locution: counselorLocution,
        counselledCharacter,
      };
      const counselor = createCounselor(character, counselledCharacter);

      expect(counselor).toMatchObject(expectedCounselor);
    });
  });
});
