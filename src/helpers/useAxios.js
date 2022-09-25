import axios from "axios";
import { getToken } from "util/token";

const useAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Authorization': `Bearer ${getToken()}`}
});


export default useAxios;
