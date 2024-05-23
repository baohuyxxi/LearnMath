import axios from "../axios";

 const AuthAPI = {
    login: async (data) => {
        // return (await axios.post(`/auth/sign-in`, data)).data;
        const res = await axios.post(`/auth/sign-in`, data);
        return res.data;
    }
}

export default AuthAPI;