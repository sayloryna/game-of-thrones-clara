export const createButton = (
  className: string,
  text: string,
): HTMLButtonElement => {
  const button = document.createElement("button");
  button.classList.add("button");

  button.classList.add(className);
  button.textContent = text.toLowerCase();
  return button;
};
