import { errorMsg, warmMsg } from './iziToast';
const galleryList = document.querySelector('.gallery');
const form = document.querySelector('form');

const checkEmptyData = data => {
  if (data.hits.length === 0) {
    errorMsg();
    galleryList.innerHTML = '';
    return true;
  }
};
const checkEmptyInput = userQuery => {
  if (userQuery.trim() === '') {
    warmMsg();
    form.elements.user_query.focus();
    return true;
  }
};
export { checkEmptyData, checkEmptyInput };
