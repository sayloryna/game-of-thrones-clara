import { characters } from "./characters/data/characters.js";
import { getLocutions, speak } from "./characters/interactions/interactions.js";

speak(getLocutions(characters));
