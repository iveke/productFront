import axios from "axios";
import { AXIOS_URL_DATA, ProductAnswerPromise } from "../../lib/axios/constant.ts";

export const updateProduct = async (data): Promise<ProductAnswerPromise[]> => {
    const res = await axios.post(`${AXIOS_URL_DATA.update}${data.id}`, data.values);
    console.log(res);
    return res.data;
    };