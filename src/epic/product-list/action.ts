import axios from "axios"
import { ProductAnswerPromise } from "../../lib/axios/constant.ts";
import { AXIOS_URL_DATA } from "./constant.ts";


export const getProductList = async (): Promise<ProductAnswerPromise[]> => {
    const res = await axios.get(AXIOS_URL_DATA);
    console.log(res.data)
    return res.data;
}