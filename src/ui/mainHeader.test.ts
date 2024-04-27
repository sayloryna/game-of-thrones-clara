import { createHeader } from "./mainHeader.js";

describe("Given the createHeader", () => {
  describe("When it is called", () => {
    test("THen it should return a header with a heading containing 'Game of Thrones'", () => {
      const titleText = "Game of Thrones";
      const header = createHeader(titleText);

      expect(header.innerHTML).toBe(`<h1>${titleText}</h1>`);
    });
  });
});
