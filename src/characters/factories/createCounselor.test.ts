import { type BasicCharacter, type Counselor } from "../types";

import {
  counselorLocution,
  createCounselor,
  createFighter,
} from "./factories.js";

describe("Given a createCounselor function", () => {
  describe("When it receives a 23 years old character named Clara Fraga,  who counsels another character", () => {
    test("Then it should return a 23 YO counselor named Clara Fraga and cousels another character", () => {
      const character: BasicCharacter = {
        id: "",
        name: "Clara",
        familyName: "Fraga",
        age: 23,
        photoSource: "",
      };

      const counselledCharacter = createFighter(
        {
          id: "",
          name: "daenerys",
          familyName: "",
          age: 5,
          photoSource: "",
        },
        "espassa",
        5,
      );

      const expectedCounselor: Omit<Counselor, "speak" | "die"> = {
        id: "",
        name: "Clara",
        familyName: "Fraga",
        age: 23,
        isAlive: true,
        photoSource: "",
        locution: counselorLocution,
        counselledCharacter,
      };
      const counselor = createCounselor(character, counselledCharacter);

      expect(counselor).toMatchObject(expectedCounselor);
    });
  });
});
