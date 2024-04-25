import {
  type Character,
  type CharacterWithoutMethods,
  type Counselor,
  counselorLocution,
  type Fighter,
  fighterLocution,
  type King,
  kingLocution,
  type Level,
  type Squire,
  squireLocution,
} from "../../types";

export const createKing = (
  character: CharacterWithoutMethods,
  totalReignYears: number,
): King => ({
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

export const createFighter = (
  character: CharacterWithoutMethods,
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

export const createSquire = (
  character: CharacterWithoutMethods,
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

export const createCounselor = (
  character: CharacterWithoutMethods,
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
