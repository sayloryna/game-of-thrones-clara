export type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Locution =
  | "Vais a morir todos"
  | "Primero pego y luego pregunto"
  | "No sé por qué, pero creo que voy a morir pronto"
  | "Soy un loser";

export interface Character {
  id: string;
  name: string;
  familyName: string;
  age: number;
  photoSource: string;
  isAlive: boolean;
  die: () => void;
  speak: () => Locution;
}

export type CharacterWithoutMethodsAndStatus = Omit<
  Character,
  "speak" | "die" | "isAlive"
>;

export interface King extends Character {
  totalReignYears: number;
}

export interface Fighter extends Character {
  weapon: string;
  dexterityLevel: Level;
}

export interface Counselor extends Character {
  counselledCharacter: Character;
}

export interface Squire extends Character {
  master: Fighter;
  grovellingLevel: Level;
}

export interface Characters {
  characters: Character[];
}

export interface LocutionResponse {
  locution: Locution;
}
