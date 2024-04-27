import { type Character } from "../types.js";
import { createCharacterList } from "./characterList.js";
import { createHeader } from "./mainHeader.js";

export const createMainContainer = () => {
  const mainContainer = document.createElement("div");

  mainContainer.classList.add("main-container");

  return mainContainer;
};

export const renderMainCntainerWithHeader = (heading: string) => {
  const mainContainer = createMainContainer();
  const mainHeader = createHeader(heading);
  const root = document.querySelector(".root");

  if (!root) {
    throw Error("Element not found");
  }

  mainHeader.classList.add("main-header");

  mainContainer.appendChild(mainHeader);

  root.appendChild(mainContainer);
};

export const renderCharacterList = (characters: Character[]) => {
  const mainContainer = document.querySelector(".main-container");

  if (!mainContainer) {
    throw Error("Element not found");
  }

  mainContainer.appendChild(createCharacterList(characters));
};
