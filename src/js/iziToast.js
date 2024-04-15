import iziToast from 'izitoast';
import iconError from '../img/icon-error.svg';
import iconWarning from '../img/icon-warn.svg';

const optionsWarming = {
  title: 'Caution',
  message: 'Type what you want to find!',
  backgroundColor: '#FFA000',
  position: 'topRight',
  theme: 'dark',
  iconUrl: iconWarning,
  timeout: 2000,
};
const optionsError = {
  theme: 'dark',
  position: 'topRight',
  message:
    'Sorry, there are no images matching your search query. Please, try again!',
  backgroundColor: ' #ef4040',
  iconUrl: iconError,
  maxWidth: '432px',
  timeout: 2000,
};
const warmMsg = () => {
  iziToast.warning(optionsWarming);
};
const errorMsg = () => {
  iziToast.error(optionsError);
};

export { warmMsg, errorMsg };
