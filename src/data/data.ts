import { speak } from "../interactions.js";
import {
  kingLocution,
  type Fighter,
  type King,
  type Counselor,
  type Squire,
  type Level,
  type Character,
  type Locution,
  fighterLocution,
  counselorLocution,
  squireLocution,
} from "../types.js";

const createKing = (character: Character, totalReignYears: number): King => ({
  name: character.name,
  familyName: character.familyName,
  age: character.age,
  locution: kingLocution,
  isAlive: true,
  totalReignYears,
  die(this: King) {
    this.isAlive = false;
  },
  speak() {
    return kingLocution;
  },
});

const createFighter = (
  character: Character,
  weapon: string,
  dexterityLevel: Level,
): Fighter => ({
  name: character.name,
  familyName: character.familyName,
  age: character.age,
  isAlive: true,
  locution: fighterLocution,
  weapon,
  dexterityLevel,
  die(this: Fighter) {
    this.isAlive = false;
  },
  speak() {
    return fighterLocution;
  },
});

const createCounselor = (
  character: Character,
  counselledCharacter: Character,
): Counselor => ({
  name: character.name,
  familyName: character.familyName,
  age: character.age,
  isAlive: true,
  locution: counselorLocution,
  counselledCharacter,
  die(this: Counselor) {
    this.isAlive = false;
  },
  speak() {
    return counselorLocution;
  },
});

const createSquire = (
  character: Character,
  master: Fighter,
  grovellingLevel: Level,
): Squire => ({
  name: character.name,
  familyName: character.familyName,
  age: character.age,
  isAlive: true,
  locution: squireLocution,
  master,
  grovellingLevel,
  die(this: Squire) {
    this.isAlive = false;
  },
  speak() {
    return squireLocution;
  },
});

export const daenerysTargaryen = createFighter(
  {
    name: "Daenerys",
    familyName: "Targaryen",
    age: 23,
    locution: fighterLocution,
  },
  "Drogon",
  8,
);

const jaimeLannister = createFighter(
  {
    name: "Jaime",
    familyName: "Lannister",
    age: 34,
    locution: fighterLocution,
  },
  "Lamento de Viuda",
  9,
);

const joffreyBaratheon = createKing(
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

const bronn = createSquire(
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
