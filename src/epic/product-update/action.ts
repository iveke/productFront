import axios from "axios";
import {
  ProductAnswerPromise,
} from "../../lib/axios/constant.ts";
import { AXIOS_URL_DATA, FORM_VALUE } from "./constant.ts";

export const updateProduct = async (
  data: FORM_VALUE
): Promise<ProductAnswerPromise> => {
  const { name, price, description, id } = data;
  const res = await axios.patch(`${AXIOS_URL_DATA}${id}`, {
    name,
    price,
    description,
  });
  return res.data;
};


export const deleteProduct = async (id: string): Promise<ProductAnswerPromise> => {
    const res = await axios.delete(`/${id}`);
    return res.data;
}