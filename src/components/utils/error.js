import { properties } from "./constants.js";

const { ID, TITLE, CONTENT, DOCUMENTS } = properties;

//new target
export const hasNewTarget = (target) => (target ? true : false);

export const hasId = (state) => state.hasOwnProperty(ID);

export const hasTitle = (state) => state.hasOwnProperty(TITLE);

export const hasContent = (state) => state.hasOwnProperty(CONTENT);

export const hasDocuments = (state) => state.hasOwnProperty(DOCUMENTS);

//array
export const isValidArray = (arr) => arr && Array.isArray(arr);
