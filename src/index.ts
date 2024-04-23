import { characters } from "./data/data.js";
import { getLocutions, speak } from "./interactions.js";

speak(getLocutions(characters));
