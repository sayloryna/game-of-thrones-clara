import { speak } from "./interactions.js";
import { type Fighter, type Locution } from "../types.js";
import { createFighter } from "../factories/factories.js";

describe("Given the speak function", (): void => {
  describe("When it receives a fighter", (): void => {
    test("Then it should return 'Primero pego y luego pregunto'", (): void => {
      const fighter: Fighter = createFighter(
        {
          name: "daenerys",
          familyName: "",
          age: 5,
          photoSource: "",
        },
        "espassa",
        5,
      );

      const expectedLocutions = "Primero pego y luego pregunto";

      const actualLocutions: Locution = speak(fighter);

      expect(actualLocutions).toEqual(expectedLocutions);
    });
  });
});
