import { getFetchData } from './pixabay-api';
import { renderAllCards } from './render-functions';
import SimpleLightbox from 'simplelightbox';
import { checkEmptyData, checkEmptyInput } from './checkFunctions';

const galleryList = document.querySelector('.gallery');
const form = document.querySelector('form');
let gallery = new SimpleLightbox('.gallery a');

const onFormSubmit = e => {
  e.preventDefault();
  
  const userQuery = form.elements.user_query.value;
  if (checkEmptyInput(userQuery)) return;
  
  galleryList.innerHTML = '';
  const loader = document.querySelector('.loader');
  loader.classList.add('isVisible');

  getFetchData(userQuery)
    .finally(() => {
      loader.classList.remove('isVisible');
    })
    .then(data => {
      if (checkEmptyData(data)) return;
      const cards = renderAllCards(data.hits);
      galleryList.innerHTML = '';
      galleryList.insertAdjacentHTML('beforeend', cards);
      gallery.refresh()
    })
    .catch(err => err);
  form.reset();
};

export { onFormSubmit };
