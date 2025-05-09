import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox();

function createGallery(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery-item">
                  <a class="gallery-link" href="${original}">
                      <img
                      class="gallery-image"
                      src="${preview}"
                      alt="${description}"
                      />
                  </a>
              </li>`;
    })
    .join('');
}
