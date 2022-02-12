import axios from 'axios';

const KEY = 'AIzaSyBto8a4T9c7ZBz9L4RMEaOqefTEf7vyX4k'

export default axios.create({

    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        type: 'video',
        maxResult : 5,
        key : KEY
        
    }
});