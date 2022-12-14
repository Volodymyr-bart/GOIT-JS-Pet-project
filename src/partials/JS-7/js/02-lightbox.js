import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryListDiv = document.querySelector('.gallery');
const cardsMarkup = createPictureCards(galleryItems);

galleryListDiv.insertAdjacentHTML("afterbegin", cardsMarkup);
galleryListDiv.addEventListener('click', onPaletteContainerClick);

function createPictureCards(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`;
  }).join(''); 
}

 let lightbox = new SimpleLightbox('.gallery a', {
        // captions: true,
        captionDelay: 250,
        // captionsData: title,
        overlayOpacity: 1,
    });