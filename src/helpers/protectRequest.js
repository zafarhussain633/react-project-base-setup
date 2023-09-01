import { getToken } from "util/token";
const protectedRequest = (request) => {
    const token = getToken();
    if (token) {
        return request();
    }
};
export default protectedRequest;