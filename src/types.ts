export interface Character {
  name: string;
  familyName: string;
  age: number;
  status: "alive" | "deceased";
}

interface King extends Character {
  totalReignYears: number;
  locution: "Vais a morir todos";
}

interface Knight extends Character {
  weapon: string;
  dexterity: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  locution: "Primero pego y luego pregunto";
}

interface Counselor extends Character {
  counselledCharacter: Character;
  locution: "No sé por qué, pero creo que voy a morir pronto";
}

interface Squire extends Character {
  master: Knight;
  GrovellingLevel: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  locution: "Soy un loser";
}
