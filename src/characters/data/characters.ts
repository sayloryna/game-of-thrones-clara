import {
  createFighter,
  createKing,
  createSquire,
  createCounselor,
} from "../factories/factories.js";
import {
  kingLocution,
  fighterLocution,
  counselorLocution,
  squireLocution,
} from "../../types.js";
import { type Fighter } from "../../types.js";

export const daenerysTargaryen: Fighter = createFighter(
  {
    name: "Daenerys",
    familyName: "Targaryen",
    age: 23,
    locution: fighterLocution,
  },
  "Drogon",
  8,
);

export const jaimeLannister = createFighter(
  {
    name: "Jaime",
    familyName: "Lannister",
    age: 34,
    locution: fighterLocution,
  },
  "Lamento de Viuda",
  9,
);

export const joffreyBaratheon = createKing(
  { name: "Joffrey", familyName: "Lannister", age: 14, locution: kingLocution },
  2,
);

export const tyrionLannister = createCounselor(
  {
    name: "Tyrion",
    familyName: "Lannister",
    age: 40,
    locution: counselorLocution,
  },
  daenerysTargaryen,
);

export const bronn = createSquire(
  { name: "Bronn", familyName: "", age: 33, locution: squireLocution },
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
