import axios from "./axiosInstance";

export default class GenericService {
    url: string;
    constructor(url: string) {
        this.url = url;
    }

    async getResource(resourceId: number | string): Promise<any> {
        const res = await axios.get(`${this.url}/${resourceId}`);
        return res.data;
    }

    async get(action?: string): Promise<any> {
        let res;

        if (action) {
            res = await axios.get(`${this.url}/${action}`);
        } else {
            res = await axios.get(`${this.url}`);
        }
  
        return res.data;
    }

    async getResouceNearbyResource(latitude: any, longitude: any): Promise<any> {
        const res = await axios.get(`${this.url}/${latitude}/${longitude}`);
        return res.data;
    }
}