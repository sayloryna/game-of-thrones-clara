type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export interface Character {
  name: string;
  familyName: string;
  age: number;
  status: "alive" | "deceased";
}

export interface King extends Character {
  totalReignYears: number;
  locution: "Vais a morir todos";
}

export interface Knight extends Character {
  weapon: string;
  dexterityLevel: Level;
  locution: "Primero pego y luego pregunto";
}

export interface Counselor extends Character {
  counselledCharacter: Character;
  locution: "No sé por qué, pero creo que voy a morir pronto";
}

export interface Squire extends Character {
  master: Knight;
  grovellingLevel: Level;
  locution: "Soy un loser";
}
