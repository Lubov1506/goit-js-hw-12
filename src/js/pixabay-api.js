import axios from 'axios';

const KEY = '43318381-7e1885a90dd63db156a286238';
axios.defaults.baseURL = 'https://pixabay.com';

const getAxiosData = async (query, photosPage) => {
  try {
    const searchParams = {
      params: {
        key: KEY,
        q: query,
        image_type: 'photo',
        safesearch: true,
        page: photosPage,
        per_page: 15,
      },
    };
    const { data } = await axios.get(`/api/`, searchParams);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export { getAxiosData };
