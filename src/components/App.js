import {
  DEFAULT_STATE,
  DEFAULT_TITLE,
  DISABLED_ID,
  ERROR_NEW_KEYWORD_MISSING,
  LOCAL_STORAGE_RECENT_DOCUMENT,
  ROOT_TITLE,
} from "./utils/constants.js";
import { hasNewTarget } from "./utils/error.js";
import DocumentPage from "./DocumentPage/DocumentPage.js";
import EditPage from "./EditPage/EditPage.js";
import { getItem } from "./utils/storage.js";
import { request } from "../api/api.js";
import { initRouter } from "./utils/router.js";

export default function App({ $target }) {
  if (!hasNewTarget(new.target)) throw new Error(ERROR_NEW_KEYWORD_MISSING);

  const documentPage = new DocumentPage({
    $target,
    initialState: [],
  });

  const editPage = new EditPage({
    $target,
    initialState: {
      id: DISABLED_ID,
      title: DEFAULT_TITLE,
      content: "",
    },
  });

  this.route = async () => {
    const { pathname, search } = location;
    const documentsList = await request("/documents");

    documentPage.setState(documentsList);
    if (pathname === "/") {
      editPage.setState(DEFAULT_STATE);
    } else if (pathname.indexOf("/documents") === 0) {
      const [, , documentId] = pathname.split("/");
      const [, parentId] = search.split("=");
      const document = await request(`/documents/${documentId}`);

      editPage.setState({ ...document, parentId });
    }
  };

  this.route();

  initRouter(() => this.route());
}
