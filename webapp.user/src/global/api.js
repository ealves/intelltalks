import axios from "axios";

export class API {

    constructor() {
        this.client = axios.create({
            baseURL: "https://localhost:3000"
         });        
    }

    async login(params) {
        return this.client.post('/login', params)
        .then((value) => {
            return JSON.parse(value);
        })
        .catch((error) => {
            return error;
        });
    }

    async get_orders() {
        return this.client.get('/orders')
        .then((values) => {
            return JSON.parse(values);
        })
        .catch((error) => {
            return error;
        });
    }

    async post_order(order) {
        return this.client.post('/order', order)
        .then((value) => {
            return JSON.parse(value);
        })
        .catch((error) => {
            return error;
        });
    }

}

