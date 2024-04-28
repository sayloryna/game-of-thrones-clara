import { characters } from "./characters/data/characters.js";
import {
  renderCharacterList,
  renderMainCntainerWithHeader,
} from "./ui/index.js";

renderMainCntainerWithHeader("Game of Thrones");
renderCharacterList(characters);
