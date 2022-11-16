//validate properties
export const properties = {
  ID: "id",
  TITLE: "title",
  CONTENT: "content",
  DOCUMENTS: "documents",
};

//Header
export const DEFAULT_TITLE = "제목 없음";
export const ROOT_TITLE = "작업 중... 💨";
export const DEFAULT_CONTENT = "내용을 입력해주세요";

//Document
export const idNameObj = {
  SIDEBAR_CONTAINER: "sidebar-container",
  SIDEBAR_HEADER: "sidebar-header",
  SIDEBAR_LIST_CONTAINER: "sidebar-list-container",
  SIDEBAR_FOOTER: "sidebar-footer",
  EDITOR_CONTAINER: "editor-container",
};

export const classNameObj = {
  TITLE_WRAPPER: "title-wrapper",
  TITLE: "title",
  BTN_WRAPPER: "btn-wrapper",
  DISPLAY_BTN: "display-btn",
  NEW_BTN: "new-btn",
  REMOVE_BTN: "remove-btn",
  DOCUMENT_BLOCK: "document-block",
  DOCUMENT_SECTION: "document-section",
  DOCUMENT_LIST_BLOCK: "document-list-block",
  DOCUMENT_BLOCK_INNER: "document-block-inner",
  SIDEBAR_DOCUMENT_LIST_CONTAINER: "sidebar-list-container",
  EDITOR_TOPBAR: "topbar",
  EDOTOR_EDITOR: "editor"
};

export const styleObj = {
  DEFAULT_PADDING: 15,
  PADDING_INCREMENT: 20,
};

export const DOCUMENT_HEADER_CONTENT = "Notion";
export const DOCUMENT_FOOTER_CONTENT = "New Doc";
export const DISABLED_ID = -1;
export const DEFAULT_ID = "new";

export const DEFAULT_STATE = {
  id: DISABLED_ID,
  title: ROOT_TITLE,
  content: "",
};

//Button
export const DELETE_BUTTON_TEXT = "Delete";

//error
export const ERROR_NEW_KEYWORD_MISSING = "Error: missing new keyword";
export const ERROR_API_CALL = "Error: Api call";

//localstorage
export const LOCAL_STORAGE_RECENT_DOCUMENT = "recent-document";
export const LOCAL_STORAGE_DISPLAY = "display";
export const LOCAL_IS_GOING_TO_PUT = "is-going-to-put";
export const LOCAL_IS_PUTTING_OKAY = "is-putting-okay";
export const LOCAL_IS_WAITING_USER_ANSWER = "is-waiting-user-answer";

//route keyword
export const EVENT_ROUTE_PUSH = "route-push";
export const EVENT_ROUTE_REMOVE = "route-remove-document";
export const EVENT_ROUTE_CREATE = "route-create-document";
export const EVENT_ROUTE_PUT = "route-put-document";

export const EVENT_HEADER_CHANGE = "header-change";
