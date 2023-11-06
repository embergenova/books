import axios from 'axios'

export const api = axios.create({
    baseURL: `https://example-data.draftbit.com`,
    timeout: 10000,
   
  });

  