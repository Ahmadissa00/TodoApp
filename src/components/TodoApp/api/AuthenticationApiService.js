import { apiClient } from './apiClient';


    export const BasicAuthentication 
    = (token) => apiClient.get(`/basicauth`,
    { headers: { 
        Authorization :token
     } }
    );

    export const JwtAuthentication 
    = (username,password) => apiClient
                    .post(`/authenticate`,{username, password});