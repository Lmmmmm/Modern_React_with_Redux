import axios from 'axios'
const KEY = 'AIzaSyAS6AszV5KrUTZHk8S5E5liMgrBrBG2P5M';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})