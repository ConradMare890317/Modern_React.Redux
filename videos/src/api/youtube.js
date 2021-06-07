import axios from 'axios';

const KEY = 'AIzaSyDVW5EC-Mlo7larNQDvK9SkRCjr20cVUBc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

