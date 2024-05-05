import {
  createCounselor,
  createFighter,
  createKing,
  createSquire,
  kingLocution,
} from "../../characters/factories/factories.js";
import { type King, type Character } from "../../characters/types.js";
import { getCharacterCardBackData } from "../characterBack.js";

describe("Given the createCharacterCardBack function", () => {
  describe("When it receives a king character who has reign for 5 years", () => {
    test("Then it should return 'Years of reign 5' ", () => {
      const king: King = createKing(
        {
          id: "",
          name: "",
          familyName: "",
          age: 5,
          photoSource: "",
        },
        5,
      );
      const reignYears = `Years of reign: 5`;

      const cardBack = getCharacterCardBackData(king);

      expect(cardBack.textContent).toBe(reignYears);
    });
  });

  describe("When it receives a fighter holding an Axe with a dexterity of 10", () => {
    test(`Then it should return "Weapon: 'Axe'" and "Dexterity: 10"`, () => {
      const fighter = createFighter(
        { id: "", name: "", familyName: "", age: 5, photoSource: "" },
        "Axe",
        10,
      );
      const weaponText = `Weapon: "Axe"`;
      const dexterityText = `Dexterity: 10`;
      const expectedTotalExtraData = 2;

      const cardback = getCharacterCardBackData(fighter);
      const fighterExtraDatas = cardback.querySelectorAll("p");

      expect(fighterExtraDatas).toHaveLength(expectedTotalExtraData);

      expect(fighterExtraDatas[0].textContent).toBe(weaponText);
      expect(fighterExtraDatas[1].textContent).toBe(dexterityText);
    });
  });

  describe("When it receives a Squire who serves a fighter named Paco Porras and a grovelling level of 10", () => {
    test("Then it should return 'Ballism level: 10' and 'Serves to: Paco Porras'  ", () => {
      const fighterPaco = createFighter(
        {
          id: "",
          name: "Paco",
          familyName: "Porras",
          age: 5,
          photoSource: "",
        },
        "Axe",
        10,
      );
      const squire = createSquire(
        {
          id: "",
          name: "",
          familyName: "",
          age: 5,
          photoSource: "",
        },
        fighterPaco,
        10,
      );

      const ballismText = `Ballism level: 10`;
      const masterText = `Serves to: Paco Porras`;
      const expectedTotalExtraData = 2;

      const cardback = getCharacterCardBackData(squire);
      const squireExtraDatas = cardback.querySelectorAll("p");

      expect(squireExtraDatas).toHaveLength(expectedTotalExtraData);
      expect(squireExtraDatas[0].textContent).toBe(ballismText);
      expect(squireExtraDatas[1].textContent).toBe(masterText);
    });
  });

  describe("When it receives a counselor that advises king Eric Cartman", () => {
    test("Then it should return 'Advises to: Eric Cartman'", () => {
      const kingEric = createKing(
        {
          id: "",
          name: "Eric",
          familyName: "Cartman",
          age: 10,
          photoSource: "",
        },
        9,
      );
      const counselor = createCounselor(
        {
          id: "",
          name: "",
          familyName: "",
          age: 10,
          photoSource: "",
        },
        kingEric,
      );
      const expectedText = `Advises to: Eric Cartman`;

      const cardBack = getCharacterCardBackData(counselor);

      expect(cardBack.textContent).toBe(expectedText);
    });
  });

  describe("When it receives a plain character", () => {
    test("Then it should return an empty text", () => {
      const character: Character = {
        id: "",
        name: "",
        familyName: "",
        age: 10,
        photoSource: "",
        isAlive: true,
        locution: "",
        die() {
          this.isAlive = false;
        },
        speak() {
          return kingLocution;
        },
      };

      const expectedText = "";

      const cardBack = getCharacterCardBackData(character);

      expect(cardBack.textContent).toBe(expectedText);
    });
  });
});
