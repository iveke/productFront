export enum QUERY_KEY_ENUM {
  PRODUCT_LIST = "list",
}

export const QUERY_KEY_DATA = {
  [QUERY_KEY_ENUM.PRODUCT_LIST]: "product-list",
};
export enum AXIOS_URL_ENUM {
  LIST = "list",
}

export const AXIOS_URL_DATA = {
  [AXIOS_URL_ENUM.LIST]: "/list",
};

export interface ProductPromise {
  id: string;
  name: string;
  price: number;
  description: string | null;
  createDate: Date;
  updateDate: Date;
}
