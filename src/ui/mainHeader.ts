export const createHeader = (titletext: string) => {
  const header = document.createElement("header");
  const title = document.createElement("h1");
  title.classList.add("main-title");

  title.textContent = titletext;

  header.appendChild(title);

  return header;
};
