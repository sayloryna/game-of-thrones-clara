import { characters } from "./characters/data/characters.js";
import { getLocutions, speak } from "./characters/interactions/interactions.js";
import { createHeader, createMainContainer } from "./ui/header.js";

speak(getLocutions(characters));

createMainContainer();
createHeader();
