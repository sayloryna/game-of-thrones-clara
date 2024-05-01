import { createButton } from "../button.js";

describe("Given the createButton", () => {
  describe("When its called", () => {
    test("then it should return a button", () => {
      const expectedTagName = "BUTTON";
      const testFunction = () => {
        console.log("miau");
      };

      const buttonTagName = createButton("patata", testFunction).tagName;

      expect(buttonTagName).toBe(expectedTagName);
    });
  });

  describe("When it receives 'button'", () => {
    test("Then it should return a button with a class 'button", () => {
      const classButton = "button";

      const testFunction = () => {
        console.log("miau");
      };

      const button = createButton(classButton, testFunction);

      const buttonClass = button.classList.toString();

      expect(buttonClass).toBe(classButton);
    });
  });
});
