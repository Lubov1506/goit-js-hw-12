const FETCH_KEY = '43318381-7e1885a90dd63db156a286238';
const BASE_URL = 'https://pixabay.com/api/';

const getFetchData = query => {
  const searchParams = new URLSearchParams({
    key: FETCH_KEY,
    q: query,
    image_type: 'photo',
    safesearch: true,
  });
  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export { getFetchData };
