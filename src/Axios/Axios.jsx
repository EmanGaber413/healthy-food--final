import axios from "axios";


const Axiosinstance =axios.create({
baseURL:"https://food.sidigaber.org/api/",
headers:{ "Content-Type": "application/json",
        "Accept-Language": 'en'}
});


export default Axiosinstance;