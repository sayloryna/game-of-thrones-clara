import { getCharacters } from "./characters/data/characters.js";
import {
  renderCharacterList,
  renderMainContainerWithHeader,
} from "./ui/index.js";

renderMainContainerWithHeader("Game of Thrones");

renderCharacterList(await getCharacters());
