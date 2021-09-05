import axios from 'axios'
import config from '../config';
import * as auth from './auth'

export function getCommonHeaders(h) {
    var headers = {
        "Access-Control-Allow-Origin": "*", // development only
        // "Content-Type": "application/x-www-form-urlencoded"
        "Content-Type": "application/json"
    };
    var token = auth.getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
    if (h) headers = { ...h, ...headers };
    return headers;
}

export function apiPost(endpoint, body, onSuccess, onFailure, headers, useBaseUrl) {
    if(useBaseUrl) endpoint = config.API_BASE_URL+endpoint

    axios
    .post(endpoint, body, {
        headers: getCommonHeaders(headers)
    })
    .then(response => {        
        if (onSuccess)  onSuccess(response.data);
    })
    .catch(error => {
        if (onFailure) onFailure(error);
    })
     
}

export async function apiGet(endpoint, onSuccess, onFailure, headers, useBaseUrl) {
    if(useBaseUrl) endpoint = config.API_BASE_URL+endpoint
    await axios
    .get(endpoint, {
        headers: getCommonHeaders(headers)
    })
    .then(response => {
        if (onSuccess) onSuccess(response.data);
    })
    .catch(error => {         
        if (onFailure) onFailure(error);
    });
}