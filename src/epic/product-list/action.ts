import axios from "axios"
import { AXIOS_URL_DATA, ProductPromise } from "./constant.ts";

axios.defaults.baseURL = "http://localhost:3005/product";


export const getProductList = async (): Promise<ProductPromise[]> => {
    const res = await axios.get(AXIOS_URL_DATA.list);
    console.log(res.data)
    return res.data;
}