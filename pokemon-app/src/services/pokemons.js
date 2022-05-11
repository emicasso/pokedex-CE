import {API} from "./api"


export const getPokemones = async (id) => {
    return API.get(`pokemon/${id}`);
}


export const getPagination = () => {
    return API.get("pokemon?limit=20&offset=20");
}