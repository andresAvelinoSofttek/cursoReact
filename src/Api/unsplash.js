import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4NOBkQ-Rkiu_w7kc0oHTOduUE32gDJphq1bF30CXXKE'
    }
})

