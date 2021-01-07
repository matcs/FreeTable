import axios from 'axios'

const api = axios.create({
    //ESSA URL VEM JUNTO COM O EXPO QUANDO COMEÇA O NPM START
    baseURL: 'http://192.168.0.107:3333'
})

export default api;