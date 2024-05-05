import {
  createCounselor,
  createFighter,
  createKing,
  createSquire,
  kingLocution,
} from "../../characters/factories/factories.js";
import { type Character } from "../../characters/types.js";
import { getCharacterKindMark } from "../characterCard.js";

describe("Given the getCharacterMark", () => {
  describe("When it receives a king character", () => {
    test("Then it should return 👑", () => {
      const king = createKing(
        {
          id: "",
          name: "",
          age: 5,
          familyName: "",
          photoSource: "",
        },
        5,
      );
      const expectedMark = "👑";

      const kingMark = getCharacterKindMark(king);

      expect(kingMark).toBe(expectedMark);
    });
  });

  describe("When it receives a fighter character", () => {
    test("Then it should return 🗡 ", () => {
      const fighter = createFighter(
        {
          id: "",
          name: "",
          age: 5,
          familyName: "",
          photoSource: "",
        },
        "Espada",
        10,
      );
      const expectedMark = "🗡";

      const fightertMark = getCharacterKindMark(fighter);

      expect(fightertMark).toBe(expectedMark);
    });
  });

  describe("When it receives a counselor character", () => {
    test("Then it should return 🎓 ", () => {
      const fighter = createFighter(
        {
          id: "",
          name: "",
          age: 5,
          familyName: "",
          photoSource: "",
        },
        "Espada",
        10,
      );

      const counselor = createCounselor(
        {
          id: "",
          name: "",
          age: 5,
          familyName: "",
          photoSource: "",
        },
        fighter,
      );

      const expectedMark = "🎓";

      const counselorMark = getCharacterKindMark(counselor);

      expect(counselorMark).toBe(expectedMark);
    });
  });

  describe("When it receives a squire character", () => {
    test("Then it should return 🛡️ ", () => {
      const fighter = createFighter(
        {
          id: "",
          name: "",
          age: 5,
          familyName: "",
          photoSource: "",
        },
        "Espada",
        10,
      );
      const squire = createSquire(
        {
          id: "",
          name: "",
          age: 5,
          familyName: "",
          photoSource: "",
        },
        fighter,
        5,
      );

      const expectedMark = "🛡️";

      const squireMark = getCharacterKindMark(squire);

      expect(squireMark).toBe(expectedMark);
    });
  });

  describe("When it receives a character thats not a king nor a fighter nor counselor nor a squire", () => {
    test("Then it should return an empty text", () => {
      const character: Character = {
        id: "",
        name: "",
        familyName: "",
        age: 5,
        photoSource: "",
        locution: "Vais a morir todos",
        isAlive: true,
        die(this: Character) {
          this.isAlive = false;
        },
        speak() {
          return kingLocution;
        },
      };
      const expectedMark = "";

      const mark = getCharacterKindMark(character);

      expect(mark).toBe(expectedMark);
    });
  });
});
