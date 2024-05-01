import { characters, getCharacters } from "./characters/data/characters.js";
import {
  renderCharacterList,
  renderMainContainerWithHeader,
} from "./ui/index.js";

renderMainContainerWithHeader("Game of Thrones");

const delayedCharacters = await getCharacters(characters);

renderCharacterList(delayedCharacters);
