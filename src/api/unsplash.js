import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID eKalw8VXjhf4MtP1tRbQOEXWlm9N3z_ld6fqwDXcvGE',
  },
});
