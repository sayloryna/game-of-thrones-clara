import { type Character, type Locution } from "../types.js";

export const speak = (character: Character): Locution => character.speak();
