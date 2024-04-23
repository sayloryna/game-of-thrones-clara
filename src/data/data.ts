import {
  type Knight,
  type King,
  type Counselor,
  type Squire,
} from "../types.js";

const joffreyBaratheon: King = {
  name: "Joffrey",
  familyName: "Baratheon",
  age: 14,
  status: "deceased",
  totalReignYears: 2,
  locution: "Vais a morir todos",
};

const jaimeLannister: Knight = {
  name: "Jaime",
  familyName: "Lannister",
  age: 34,
  status: "alive",
  weapon: "Lamento de Viuda",
  dexterityLevel: 9,
  locution: "Primero pego y luego pregunto",
};

const daenerysTargaryen: Knight = {
  name: "Daenerys",
  familyName: "Targaryen",
  age: 23,
  status: "deceased",
  weapon: "Drogon",
  dexterityLevel: 8,
  locution: "Primero pego y luego pregunto",
};

const tyrionLannister: Counselor = {
  name: "Tyrion",
  familyName: "Lannister",
  age: 40,
  status: "alive",
  counselledCharacter: daenerysTargaryen,
  locution: "No sé por qué, pero creo que voy a morir pronto",
};

const bronn: Squire = {
  name: "Bronn",
  familyName: "",
  age: 33,
  status: "alive",
  master: jaimeLannister,
  grovellingLevel: 5,
  locution: "Soy un loser",
};

const characters = [
  joffreyBaratheon,
  jaimeLannister,
  tyrionLannister,
  daenerysTargaryen,
  bronn,
];
