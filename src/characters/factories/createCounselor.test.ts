import {
  type CharacterWithoutMethodsAndStatus,
  type Fighter,
  type Counselor,
} from "../../types";

import { createCounselor, createFighter } from "./factories";

describe("Given a createCounselor function", () => {
  describe("When it receives a 23 years old character named Clara Fraga,  who counsels another character", () => {
    test("Then it should return a 23 YO counselor named Clara Fraga and cousels another character", () => {
      const character: CharacterWithoutMethodsAndStatus = {
        name: "Clara",
        familyName: "Fraga",
        age: 23,
        photoSource: "",
      };

      const counselledCharacter = createFighter(
        {
          name: "daenerys",
          familyName: "",
          age: 5,
          photoSource: "",
        },
        "espassa",
        5,
      );

      const expectedCounselor: Omit<Counselor, "speak" | "die"> = {
        name: "Clara",
        familyName: "Fraga",
        age: 23,
        isAlive: true,
        photoSource: "",
        counselledCharacter,
      };
      const counselor = createCounselor(character, counselledCharacter);

      expect(counselor).toMatchObject(expectedCounselor);
    });
  });
});
