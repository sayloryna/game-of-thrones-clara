const root = document.querySelector(".root");
if (!root) {
  throw Error("Element not found");
}

export const createMainContainer = () => {
  const mainContainer = document.createElement("div");

  mainContainer.classList.add("main-container");

  return mainContainer;
};
