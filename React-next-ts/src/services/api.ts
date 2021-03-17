import axios from "axios";
import { useEffect } from "react";

const api = axios.create({
    baseURL: "http://localhost:8081",
});


export default api;