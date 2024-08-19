export enum AXIOS_URL_ENUM {
  LIST = "list",
  CREATE = "create",
  UPDATE = "update",
}

export const AXIOS_URL_DATA = {
  [AXIOS_URL_ENUM.LIST]: "/list",
  [AXIOS_URL_ENUM.CREATE]: "/",
  [AXIOS_URL_ENUM.UPDATE]: "/",
};

export interface ProductAnswerPromise {
  id: string;
  name: string;
  price: number;
  description: string | null;
  createDate: Date;
  updateDate: Date;
}
