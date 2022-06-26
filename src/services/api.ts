import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080",
});

export const createSession = async (user:any, password:any) => {
    return api.post("/sessions", {user, password});
}