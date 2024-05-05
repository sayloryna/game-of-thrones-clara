import getCharacters from "./characters/data/characters.js";
import {
  renderCharacterList,
  renderMainContainerWithHeader,
} from "./ui/index.js";

const renderContent = async (title: string): Promise<void> => {
  renderMainContainerWithHeader(title);

  renderCharacterList(await getCharacters());
};

await renderContent("Game of Thrones");
