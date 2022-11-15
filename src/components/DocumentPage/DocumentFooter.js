import { classNameObj, DOCUMENT_FOOTER_CONTENT, ERROR_NEW_KEYWORD_MISSING, styleObj } from "../utils/constants.js";
import { hasNewTarget } from "../utils/error.js";
import { routeCreateDocument } from "../utils/router.js";

const { TITLE, NEW_BTN, DOCUMENT_BLOCK_INNER } = classNameObj;

export default function DocumentFooter({ $target }) {
  if (!hasNewTarget(new.target)) throw new Error(ERROR_NEW_KEYWORD_MISSING);

  const $footer = document.createElement("div");
  $footer.setAttribute("id", "sidebar-footer");
  $target.appendChild($footer);

  const CONTENT = DOCUMENT_FOOTER_CONTENT;
  const DEFAULT_PADDING = styleObj.DEFAULT_PADDING;

  this.render = () => {
    $footer.innerHTML = `
      <div class="${DOCUMENT_BLOCK_INNER}" style="padding: 2px 10px 2px ${DEFAULT_PADDING}px">
        <div class="${NEW_BTN}"></div>
        <div class="${TITLE}"> ${CONTENT} </div>
      </div>
    `;
  };

  this.render();

  $footer.addEventListener("click", () => {
    routeCreateDocument({ id: null });
  });
}
