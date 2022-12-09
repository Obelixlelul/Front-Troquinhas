
import axios from 'axios';

let token = window.localStorage.getItem("token");

if (token) {
    token = JSON.parse(token);
}

const http = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

export const api: any = {
    loginAuth: async (login: string, senha: string) => {
        
        let response = await http.post(`/colecionadores/auth`, {
            login: login, 
            senha: senha
        });
        
        return response.data;
    },
    
    getDataByEmail: async (email: string) => {

        email = JSON.parse(email);

        let response = await http.get(`/colecionadores/email/${email}`);

        return response.data;
    }
}