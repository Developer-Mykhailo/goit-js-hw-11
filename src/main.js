import { getImagesByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createGallery } from './js/render-functions';

const formElem = document.querySelector('.form');
const inputElem = formElem.querySelector('input[name="search-text"]');
const galerryElem = document.querySelector('.gallery');

formElem.addEventListener('submit', findImages);

function findImages(event) {
  event.preventDefault();
  const inputData = inputElem.value.trim().toLowerCase();

  if (!inputData) {
    iziToast.warning({
      message: 'The input field is empty, try again.',
      position: 'center',
    });
    formElem.reset();
    return;
  }

  getImagesByQuery(inputData).then(data => {
    if (data.hits.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'center',
      });
      formElem.reset();
      return;
    }
    const images = data.hits;
    console.log(images);

    galerryElem.innerHTML = createGallery(images);
    formElem.reset();
  });
}
