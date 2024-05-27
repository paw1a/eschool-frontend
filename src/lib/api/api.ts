import axios from "axios";
import {API_BASE_URL} from "$lib/utils/constants.ts";

export async function apiRequest(url: string, method: string='get', payload: object) {
    let data, error
    await axios({
        method: method,
        url: API_BASE_URL + url,
        withCredentials: true,
        data: payload,
    })
    .then(resp => {
        data = resp.data;
    })
    .catch(err => {
        error = err.response.data
    });

    return {data, error}
}