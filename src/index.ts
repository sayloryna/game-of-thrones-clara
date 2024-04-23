import { characters } from "./data/data.js";
import { getLocutions, speak } from "./interactions.js";
import { createHeader, createMainContainer } from "./ui/ui.js";

speak(getLocutions(characters));

createMainContainer();
createHeader();
