// import * as basicLightbox from 'basiclightbox';

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListDiv = document.querySelector('.gallery');
const cardsMarkup = createPictureCards(galleryItems);
// const modalOpen = document.querySelector(`.basicLightbox--visible`);

galleryListDiv.insertAdjacentHTML("afterbegin", cardsMarkup);

galleryListDiv.addEventListener('click', onPaletteContainerClick)




function createPictureCards(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
  }).join('');  
}

function onPaletteContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return
  };
  
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
	
      onShow: () => {
        window.addEventListener(`keydown`, closeModal)
      },
	
      onClose: () => {
        window.removeEventListener(`keydown`, closeModal)
      }
    });

  instance.show();
  gallery.addEventListener(`keydown`, closeModal)
  function closeModal(evt) {
  if (evt.code !== `Escape`) {
    return
  }
    instance.close();
}
}











