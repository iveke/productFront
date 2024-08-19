import axios from "axios"
import { AXIOS_URL_DATA, ProductAnswerPromise } from "../../lib/axios/constant.ts";


export const getProductList = async (): Promise<ProductAnswerPromise[]> => {
    const res = await axios.get(AXIOS_URL_DATA.list);
    console.log(res.data)
    return res.data;
}