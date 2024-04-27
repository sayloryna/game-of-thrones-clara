export const createHeader = (titletext: string) => {
  const header = document.createElement("header");
  const title = document.createElement("h1");

  title.textContent = titletext;

  header.appendChild(title);

  return header;
};
