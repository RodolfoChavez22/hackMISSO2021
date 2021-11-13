import axios from 'axios';

const PORT = process.env.PORT || 4000;
const url = `http://localhost:${PORT}/posts`;

export const fetchPosts = () => axios.get(url);
    
