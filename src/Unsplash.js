import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID YvD7HmLcRCpgXZX61iEHBN_k3MYqJy_LY4Jk4Ox2D3g',
    },
});