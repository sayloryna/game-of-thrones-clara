import {
  type Character,
  type CharacterWithoutMethodsAndStatus,
  type Counselor,
  type Fighter,
  type King,
  type Level,
  type Squire,
} from "../../types.js";
import {
  counselorLocution,
  fighterLocution,
  kingLocution,
  squireLocution,
} from "../data/characters.js";

export const createKing = (
  character: CharacterWithoutMethodsAndStatus,
  totalReignYears: number,
): King => ({
  name: character.name,
  familyName: character.familyName,
  age: character.age,
  photoSrc: character.photoSrc,
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
  character: CharacterWithoutMethodsAndStatus,
  weapon: string,
  dexterityLevel: Level,
): Fighter => ({
  name: character.name,
  familyName: character.familyName,
  age: character.age,
  isAlive: true,
  photoSrc: character.photoSrc,
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
  character: CharacterWithoutMethodsAndStatus,
  master: Fighter,
  grovellingLevel: Level,
): Squire => ({
  name: character.name,
  familyName: character.familyName,
  age: character.age,
  isAlive: true,
  photoSrc: character.photoSrc,
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
  character: CharacterWithoutMethodsAndStatus,
  counselledCharacter: Character,
): Counselor => ({
  name: character.name,
  familyName: character.familyName,
  age: character.age,
  isAlive: true,
  photoSrc: character.photoSrc,
  counselledCharacter,
  die(this: Counselor) {
    this.isAlive = false;
  },
  speak() {
    return counselorLocution;
  },
});
