import exp from "constants";
import {
  createCounselor,
  createFighter,
  createKing,
  createSquire,
  kingLocution,
} from "../../characters/factories/factories.js";
import { type Character } from "../../types.js";
import { getCharacterKindMark } from "../characterCard.js";

describe("Given the getCharacterMark", () => {
  describe("When it receives a king character", () => {
    test("Then it should return 👑", () => {
      const king = createKing(
        {
          name: "",
          age: 5,
          familyName: "",
          photoSrc: "",
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
          name: "",
          age: 5,
          familyName: "",
          photoSrc: "",
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
          name: "",
          age: 5,
          familyName: "",
          photoSrc: "",
        },
        "Espada",
        10,
      );

      const counselor = createCounselor(
        { name: "", age: 5, familyName: "", photoSrc: "" },
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
          name: "",
          age: 5,
          familyName: "",
          photoSrc: "",
        },
        "Espada",
        10,
      );
      const squire = createSquire(
        { name: "", age: 5, familyName: "", photoSrc: "" },
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
        name: "",
        familyName: "",
        age: 5,
        photoSrc: "",
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
