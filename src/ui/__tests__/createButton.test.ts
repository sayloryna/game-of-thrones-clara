import { createButton } from "../button.js";

describe("Given the createButton", () => {
  describe("When its called", () => {
    test("then it should return a button", () => {
      const expectedTagName = "BUTTON";

      const buttonTagName = createButton("miau", "miau").tagName;

      expect(buttonTagName).toBe(expectedTagName);
    });
  });

  describe("When it receives 'button'", () => {
    test("Then it should return a button with a class 'button", () => {
      const classButton = "button";

      const button = createButton(classButton, "miau");

      const buttonClass = button.classList.toString();

      expect(buttonClass).toBe(classButton);
    });
  });

  describe("When it receives the text 'Eto es un Botton' ", () => {
    test("Then it should return a buton with the text 'eto es un botton", () => {
      const text = "Eto es un Botton";
      const buttonText = "eto es un botton";

      const button = createButton("clase", text);

      expect(button.textContent).toBe(buttonText);
    });
  });
});
