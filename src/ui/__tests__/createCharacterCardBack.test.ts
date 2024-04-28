import { createKing } from "../../characters/factories/factories";
import { type MegaCharacter } from "../../types";
import { createCharacterCardBack } from "../characterBack.js";

describe("Given the createCharacterCardBack function", () => {
  describe("When it receives a king character who has reign for 5 years", () => {
    test("Then it should return Years of reign 5 ", () => {
      const king: Partial<MegaCharacter> = createKing(
        {
          name: "",
          familyName: "",
          age: 5,
          photoSrc: "",
        },
        5,
      );
      const reignYears = `Years of reign: ${king.totalReignYears}`;

      const cardBack = createCharacterCardBack(king);

      expect(cardBack.textContent).toBe(reignYears);
    });
  });
});
