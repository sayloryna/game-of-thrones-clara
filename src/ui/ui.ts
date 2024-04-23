const root = document.querySelector(".root");

const mainContainer = document.createElement("div");
const mainHeader = document.createElement("header");
const mainTitle = document.createElement("h1");

if (!root) {
  throw new Error("missing element");
}

export const createMainContainer = () => {
  mainContainer.classList.add("main-container");

  root.appendChild(mainContainer);
};

export const createHeader = () => {
  mainHeader.classList.add("main-header");
  mainTitle.classList.add("main-title");

  mainTitle.innerText = "Game of Thrones";

  mainHeader.appendChild(mainTitle);
  mainContainer.appendChild(mainHeader);
};
