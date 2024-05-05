import {
  type Character,
  type BasicCharacter,
  type Counselor,
  type Fighter,
  type King,
  type Level,
  type Squire,
} from "../types.js";

export const kingLocution = "Vais a morir todos";
export const fighterLocution = "Primero pego y luego pregunto";
export const counselorLocution =
  "No sé por qué, pero creo que voy a morir pronto";
export const squireLocution = "Soy un loser";

export const createKing = (
  character: BasicCharacter,
  totalReignYears: number,
): King => ({
  id: "",
  name: character.name,
  familyName: character.familyName,
  age: character.age,
  photoSource: character.photoSource,
  isAlive: true,
  locution: kingLocution,
  totalReignYears,
  die(this: King) {
    this.isAlive = false;
  },
  speak() {
    return kingLocution;
  },
});

export const createFighter = (
  character: BasicCharacter,
  weapon: string,
  dexterityLevel: Level,
): Fighter => ({
  id: "",
  name: character.name,
  familyName: character.familyName,
  age: character.age,
  isAlive: true,
  photoSource: character.photoSource,
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

export const createSquire = (
  character: BasicCharacter,
  master: Fighter,
  grovellingLevel: Level,
): Squire => ({
  id: "",
  name: character.name,
  familyName: character.familyName,
  age: character.age,
  isAlive: true,
  photoSource: character.photoSource,
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

export const createCounselor = (
  character: BasicCharacter,
  counselledCharacter: Character,
): Counselor => ({
  id: "",
  name: character.name,
  familyName: character.familyName,
  age: character.age,
  isAlive: true,
  photoSource: character.photoSource,
  locution: counselorLocution,
  counselledCharacter,
  die(this: Counselor) {
    this.isAlive = false;
  },
  speak() {
    return counselorLocution;
  },
});
