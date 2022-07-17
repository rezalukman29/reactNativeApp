import axios from "axios";

const ax = axios.create({
    baseURL: 'http://192.168.1.7:4000/',
});

ax.interceptors.request.use(
    async (config: any) => {


        // config.headers["Access-Control-Allow-Origin"] = "*";
        // config.headers["Access-Control-Allow-Headers"] = "*";
        // config.headers["Accept"] = "*";
        return config;
    },
    (error: any) => Promise.reject(error)
);

export default ax;