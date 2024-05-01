export const createButton = (className: string, action: () => void) => {
  const button = document.createElement("button");
  button.classList.add(className);
  button.addEventListener("click", () => action);
  return button;
};
