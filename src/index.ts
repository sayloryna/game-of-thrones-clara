import { characters } from "./characters/data/characters.js";
import { getLocutions, speak } from "./characters/interactions/interactions.js";
import {
  renderCharacterList,
  renderMainCntainerWithHeader,
} from "./ui/index.js";

speak(getLocutions(characters));

renderMainCntainerWithHeader("Game of Thrones");
renderCharacterList(characters);
