import { loadCSS, loadScript } from "../../scripts/aem.js";

const decorateSyntaxLanguage = (block) => {
  // classes are applied as "<blockName> <extraClass (|extraClass)> block"
  const syntaxLang = block.classList[1];
  if (syntaxLang !== "block") {
    block
      .getElementsByTagName("code")[0]
      .classList.add(`language-${syntaxLang}`);
  }
};

export default function decorate(block) {
  // load the prism assets
  loadScript("/blocks/syntax/prism.js");
  loadCSS("/blocks/syntax/prism.css");

  // process each syntax block
  decorateSyntaxLanguage(block);
}
