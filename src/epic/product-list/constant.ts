import { ProductAnswerPromise } from "../../lib/axios/constant.ts";

export const QUERY_KEY = "product-list";

export const AXIOS_URL_DATA = "/list";

export interface ComponentProps {
  list: ProductAnswerPromise[] | undefined;
  isError: boolean;
  isLoading: boolean;
}
