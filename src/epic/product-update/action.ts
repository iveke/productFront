import axios from "axios";
import {
  AXIOS_URL_DATA,
  ProductAnswerPromise,
} from "../../lib/axios/constant.ts";
import { FORM_VALUE } from "./constant.ts";

export const updateProduct = async (
  data: FORM_VALUE
): Promise<ProductAnswerPromise> => {
  const { name, price, description, id } = data;
  const res = await axios.patch(`${AXIOS_URL_DATA.update}${id}`, {
    name,
    price,
    description,
  });
  console.log(res);
  return res.data;
};


export const deleteProduct = async (id: string): Promise<ProductAnswerPromise> => {
    const res = await axios.delete(`/${id}`);
    console.log(res)
    return res.data;
}