import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID PVP3mBs3BvbeBooJKQ8S_eAX06GlHYadWfsVT95xtRY'
    }
});
