import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: "Client-ID Pl7t_DrNp4LnGUjbwc_7g5Z6UrLExbv6QM0mvug9HOk",
    }
})