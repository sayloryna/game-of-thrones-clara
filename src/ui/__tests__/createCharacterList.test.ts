import { createKing } from "../../characters/factories/factories";
import { createCharacterList } from "../characterList";

describe("Given the createCharacterList", () => {
  describe("When it receive a list of with the King Clara Fraga", () => {
    test("Then it should return a list with a character named Clara", () => {
      const characters = [
        createKing(
          {
            name: "Clara",
            familyName: "Fraga",
            age: 1,
            photoSource: "",
          },
          5,
        ),
      ];
      const characterFullName = `${characters[0].name} ${characters[0].familyName}`;

      const characterlist = createCharacterList(characters);
      const character = characterlist.querySelector(".character")!;
      const characterName = character.querySelector("h2")!;

      expect(character).not.toBeNull();
      expect(characterName).not.toBeNull();
      expect(characterName.textContent).toBe(characterFullName);
    });
  });
});
