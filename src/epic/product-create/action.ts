    import axios from "axios";
    import {
    AXIOS_URL_DATA,
    ProductAnswerPromise,
    } from "../../lib/axios/constant.ts";

    axios.defaults.baseURL = "http://localhost:3005/product";

    export const createProduct = async (data): Promise<ProductAnswerPromise[]> => {
    const res = await axios.post(AXIOS_URL_DATA.create, data);
    console.log(res);
    return res.data;
    };
