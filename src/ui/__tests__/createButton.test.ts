import { createButton } from "../button.js";

describe("Given the createButton", () => {
  describe("When its called", () => {
    test("Then it should return a button", () => {
      const expectedTagName = "BUTTON";

      const buttonTagName = createButton("miau", "miau").tagName;

      expect(buttonTagName).toBe(expectedTagName);
    });
  });

  describe("When it receives 'patata'", () => {
    test("Then it should return a button with the classes'button' and 'patata'", () => {
      const className = "patata";
      const expectedClass = `button patata`;

      const button = createButton(className, "miau");

      const buttonClass = button.classList.toString();

      expect(buttonClass).toBe(expectedClass);
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
