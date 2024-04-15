import { getAxiosData } from './pixabay-api';
import { renderAllCards } from './render-functions';
import SimpleLightbox from 'simplelightbox';
import { checkEmptyData, checkEmptyInput } from './checkFunctions';
import { smoothScrollByCardHeight } from './smothScroll';

const galleryList = document.querySelector('.gallery');
const form = document.querySelector('form');
const loadMoreBtn = document.querySelector('.load-btn');
let userQuery = null;
let photosPage = 1;

let gallery = new SimpleLightbox('.gallery a');

const removeLoadMoreBtn = () => loadMoreBtn.classList.add('is-hidden');

const onFormSubmit = async e => {
  e.preventDefault();
  userQuery = form.elements.user_query.value;
  photosPage = 1;
  if (checkEmptyInput(userQuery)) {
    removeLoadMoreBtn();
    return;
  }

  galleryList.innerHTML = '';
  const loader = document.querySelector('.loader');
  loader.classList.add('is-visible');

  try {
    const { hits, total, totalHits } = await getAxiosData(
      userQuery,
      photosPage
    );
    loader.classList.remove('is-visible');
    if (checkEmptyData(hits)) {
      removeLoadMoreBtn();
      return;
    }

    const cards = renderAllCards(hits);

    galleryList.innerHTML = '';
    galleryList.insertAdjacentHTML('beforeend', cards);

    if (total > totalHits) {
      loadMoreBtn.classList.remove('is-hidden');
      loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
    } else {
      removeLoadMoreBtn();
    }

    gallery.refresh();
  } catch (err) {
    loader.classList.remove('is-visible');
    throw new Error(err);
  }

  form.reset();
};

const onLoadMoreBtnClick = async () => {
  photosPage++;
  try {
    const { hits, totalHits } = await getAxiosData(userQuery, photosPage);

    const cards = renderAllCards(hits);
    galleryList.insertAdjacentHTML('beforeend', cards);

    if (totalHits === photosPage) {
      loadMoreBtn.classList.add('is-hidden');
      loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
    }

    const galleryItem = galleryList.querySelector('.gallery-item');
    window.addEventListener('load', smoothScrollByCardHeight(galleryItem));
  } catch (err) {
    throw new Error(err);
  }
};

export { onFormSubmit };
