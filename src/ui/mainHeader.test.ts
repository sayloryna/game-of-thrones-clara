import { createHeader } from "./mainHeader.js";

describe("Given the createHeader", () => {
  describe("When it is called", () => {
    test("THen it should return a header with a heading containing 'Game of Thrones'", () => {
      const titleText = "Game of Thrones";
      const header = createHeader(titleText);

      const title = header.querySelector("h1")!;

      expect(title).not.toBeNull();
      expect(title.textContent).toBe(titleText);
    });
  });
});
