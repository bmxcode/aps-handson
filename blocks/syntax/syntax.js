import { loadCSS, loadScript } from "../../scripts/aem.js";

const decorateSyntaxBlock = (el) => {
  el.classList.forEach((className) => {
    if (className !== "syntax" && className !== "block") {
      el.getElementsByTagName("code")[0].classList.add(`language-${className}`);
    }
  });
};

export default function decorate(block) {
  const els = document.querySelectorAll(".syntax");
  if (els.length) {
    // load the prism assets
    loadScript("/blocks/syntax/prism.js");
    loadCSS("/blocks/syntax/prism.css");

    // process each syntax block
    els.forEach(decorateSyntaxBlock);
  }
}
