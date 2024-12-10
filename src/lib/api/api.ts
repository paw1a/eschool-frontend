import axios from "axios";

export async function apiRequest(url: string, method: string = 'get', payload?: object, token?: string) {
    let headers = {}
    if (token) {
        headers = {'Authorization': token}
    }

    let data, error
    await axios({
        method: method,
        url: '/api/v1' + url,
        withCredentials: true,
        data: payload,
        headers: headers,
    })
    .then(resp => {
        data = resp.data;
    })
    .catch(err => {
        error = err.response.data
    });

    return {data, error}
}
