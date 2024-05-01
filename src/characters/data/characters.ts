import { type Character } from "../../types.js";
import {
  createFighter,
  createKing,
  createCounselor,
  createSquire,
} from "../factories/factories.js";

const daenerysTargaryen = createFighter(
  {
    name: "Daenerys",
    familyName: "Targaryen",
    age: 23,
    photoSrc: "images/characters-img/daenerys.webp",
  },
  "Drogon",
  8,
);

const jaimeLannister = createFighter(
  {
    name: "Jaime",
    familyName: "Lannister",
    age: 34,
    photoSrc: "images/characters-img/jaime.webp",
  },
  "Lamento de Viuda",
  9,
);

const joffreyBaratheon = createKing(
  {
    name: "Joffrey",
    familyName: "Lannister",
    age: 14,
    photoSrc: "images/characters-img/joffrey.webp",
  },
  2,
);

const tyrionLannister = createCounselor(
  {
    name: "Tyrion",
    familyName: "Lannister",
    age: 40,
    photoSrc: "images/characters-img/tyrion.webp",
  },
  daenerysTargaryen,
);

const bronn = createSquire(
  {
    name: "Bronn",
    familyName: "",
    age: 33,
    photoSrc: "images/characters-img/bronn.webp",
  },
  jaimeLannister,
  5,
);

export const characters = [
  joffreyBaratheon,
  jaimeLannister,
  tyrionLannister,
  daenerysTargaryen,
  bronn,
];

export const getCharacters = async (characters: Character[]) =>
  new Promise<Character[]>((resolve) => {
    setTimeout(() => {
      resolve(characters);
    }, 3000);
  });
