import { createContext, useState ,useContext} from "react";
import { BasicAuthentication } from "../api/HelloWorldapi";
import { apiClient } from "../api/apiClient";
import { JwtAuthentication } from "../api/AuthenticationApiService";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);




function AuthProvider({ children }) {


    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [username, setUsername] = useState(null);

    const [token, setToken] = useState(null);

    // function login(username, password) {
    //     if (username === "ahmad" && password === "123") 
    //     setIsAuthenticated(true);
    //     setUsername(username);
    //     return true;
        
    // }


    // async function login(username, password) {

    //     const baToken = 'Basic ' + window.btoa(username + ':' + password);

    //     try {
    //     const response = await BasicAuthentication(baToken);
       
    //     if (response.status !== 200) {
    //         logout();
    //     }else{
    //     setIsAuthenticated(true);
    //     setUsername(username);
    //     setToken(baToken);

    //     apiClient.interceptors.request.use(
    //         (config) => {
    //             config.headers.Authorization = baToken;
    //             return config;
    //         });

    //     return true;
    //     }}catch (error) {
    //         logout();
    //     }
        
    // }


    async function login(username, password) {

       

        try {
            const response =  await JwtAuthentication(username, password);
       
        if (response.status !== 200) {
            logout();
        }else{
            const jwtToken = 'Bearer ' + response.data.token;
            setIsAuthenticated(true);
            setUsername(username);
            setToken(jwtToken);

             apiClient.interceptors.request.use(
            (config) => {
                config.headers.Authorization = jwtToken;
                return config;
            });

             return true;
        }}  catch (error) {
             logout();
        }
        
    }


    function logout() {
        setIsAuthenticated(false);
        setUsername(null);
        setToken(null);

        return false;
    }



    return (
        <AuthContext.Provider value={{isAuthenticated, login,logout, username, token}}>
            {children}
        </AuthContext.Provider>
    ); 
}
export { useAuth, AuthProvider };