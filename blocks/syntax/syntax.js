import { loadCSS, loadScript } from "../../scripts/aem.js";

const decorateSyntaxLanguage = (block) => {
  block.classList.forEach((className) => {
    if (className !== "syntax" && className !== "block") {
      block
        .getElementsByTagName("code")[0]
        .classList.add(`language-${className}`);
    }
  });
};

export default function decorate(block) {
  // load the prism assets
  loadScript("/blocks/syntax/prism.js");
  loadCSS("/blocks/syntax/prism.css");

  // process each syntax block
  decorateSyntaxLanguage(block);
}
