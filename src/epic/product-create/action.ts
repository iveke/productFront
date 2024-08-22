    import axios from "axios";
    import {
    ProductAnswerPromise,
    } from "../../lib/axios/constant.ts";
import { AXIOS_URL_DATA } from "./constant.ts";

    axios.defaults.baseURL = "http://localhost:3005/product";

    export const createProduct = async (data): Promise<ProductAnswerPromise[]> => {
    const res = await axios.post(AXIOS_URL_DATA, data);
    console.log(res);
    return res.data;
    };
