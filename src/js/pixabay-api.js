import axios from 'axios';

const KEY = '43318381-7e1885a90dd63db156a286238';
axios.defaults.baseURL = 'https://pixabay.com';

const getFetchData = async query => {
  try {
    const searchParams = {
      params: {
        key: KEY,
        q: query,
        image_type: 'photo',
        safesearch: true,
      },
    };
    const axiosResponse = await axios(`/api/`, searchParams)

    return axiosResponse.data;
  } catch (err) {
    throw new Error(err);
  }
};

export { getFetchData };
