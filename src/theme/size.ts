export enum BORDER_RADIUS_ENUM {
  SMALL = "small",
  DEFAULT = "default",
  LARGE = "large",
}

export const BORDER_RADIUS_DATA = {
  [BORDER_RADIUS_ENUM.SMALL]: "5px",
  [BORDER_RADIUS_ENUM.DEFAULT]: "10px",
  [BORDER_RADIUS_ENUM.LARGE]: "50px",
};

export enum WIDTH_ELEMENT_ENUM {
  CARD = "card",
  FORM = "form",
  LIST = "list",
  INPUT = "input",
  BUTTON = "button",
  TEXTAREA = "textarea",
}

export const WIDTH_ELEMENT_DATA = {
  [WIDTH_ELEMENT_ENUM.CARD]: "300px",
  [WIDTH_ELEMENT_ENUM.FORM]: "800px",
  [WIDTH_ELEMENT_ENUM.LIST]: "1200px",
  [WIDTH_ELEMENT_ENUM.INPUT]: "380px",
  [WIDTH_ELEMENT_ENUM.BUTTON]: "380px",
  [WIDTH_ELEMENT_ENUM.TEXTAREA]: "800px",
};

export enum HEIGHT_ELEMENT_ENUM {
  CARD = "card",
  FORM = "form",
  INPUT = "input",
  BUTTON = "button",
  TEXTAREA = "textarea",
  MENU = "menu",
}

export const HEIGHT_ELEMENT_DATA = {
  [HEIGHT_ELEMENT_ENUM.CARD]: "200px",
  [HEIGHT_ELEMENT_ENUM.FORM]: "240px",
  [HEIGHT_ELEMENT_ENUM.INPUT]: "25px",
  [HEIGHT_ELEMENT_ENUM.BUTTON]: "30px",
  [HEIGHT_ELEMENT_ENUM.TEXTAREA]: "50px",
  [HEIGHT_ELEMENT_ENUM.MENU]: "50px",
};

export enum FONT_SIZE_ENUM {
  TEXT = "text",
  HEADER = "header",
  LINK = "link",
}

export const FONT_SIZE_DATA = {
  [FONT_SIZE_ENUM.TEXT]: "14px",
  [FONT_SIZE_ENUM.HEADER]: "24px",
  [FONT_SIZE_ENUM.LINK]: "20px",
};
