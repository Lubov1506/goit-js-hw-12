import { errorMsg, warmMsg } from './iziToast';
const galleryList = document.querySelector('.gallery');
const form = document.querySelector('form');

const checkEmptyData = data => {
  if (data.length === 0) {
    errorMsg();
    galleryList.innerHTML = '';
    form.elements.user_query.value = '';
    return true;
  }
};
const checkEmptyInput = userQuery => {
  if (userQuery.trim() === '') {
    warmMsg();
    galleryList.innerHTML = '';
    form.elements.user_query.value = '';
    form.elements.user_query.focus();
    return true;
  }
};
export { checkEmptyData, checkEmptyInput };
