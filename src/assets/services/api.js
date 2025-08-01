import axios from "axios";
const api = axios.create({
    baseURL: 'https://backend-portalturismo-omjp.onrender.com/api'
})
export default api;