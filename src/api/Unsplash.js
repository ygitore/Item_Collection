import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization: `Client-ID ${REACT_APP_UNSPLASH_KEY}`
    }
})