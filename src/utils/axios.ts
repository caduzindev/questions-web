import axios from 'axios'

const instance = axios.create({
    baseURL:'https://opentdb.com/api.php',
    headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
    }
})

export default instance