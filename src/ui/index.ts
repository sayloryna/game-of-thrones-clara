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
  const main = document.createElement("main");
  const root = document.querySelector(".root");

  if (!root) {
    throw Error("Element not found");
  }

  mainHeader.classList.add("main-header");
  main.classList.add("main-content");

  mainContainer.append(mainHeader, main);

  root.appendChild(mainContainer);
};

export const renderCharacterList = (characters: Character[]) => {
  const main = document.querySelector(".main-content");

  if (!main) {
    throw Error("Element not found");
  }

  main.appendChild(createCharacterList(characters));
};
