export const smoothScrollByCardHeight = galleryItem => {
  const itemHeight = galleryItem.getBoundingClientRect().height;
  window.scrollBy({
    top: itemHeight * 2,
    behavior: 'smooth',
  });
};
