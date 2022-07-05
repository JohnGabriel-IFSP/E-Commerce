import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000",
});

export const createSession = async (username:any, password:any) => {
    const {data} = await api.post("/LoginCliente", {username, password});
    localStorage.setItem("AuthToken", JSON.stringify(data.token));
}

export const loggedSession = async () =>{
    return api.get("/Logged")
}

export const Register = async (username:any, password:any, userfirstname:any, usersecondname:any, email:any) =>{
    const data = await api.post("/CadastrarCliente", {username, password, userfirstname, usersecondname, email})
    return true;
}