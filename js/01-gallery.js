import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryListEl = document.querySelector('.gallery');
galleryListEl.addEventListener('click', onItemClick);

function onItemClick(event){
    if(!event.target.classList.contains('gallery__image')){
        return;
    };
    event.preventDefault();
    console.log(event.target.dataset.source);
    
    const instance = basicLightbox.create(`
        <img src ="${event.target.dataset.source}" width="800" height="600">
    `);
    instance.show();
    
};



const listItemsGallery = createlistItemsGallery(galleryItems);

function createlistItemsGallery(items) {
    return items
        .map(item => 
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
        </a> </li>`)
        .join('');
}

galleryListEl.innerHTML = listItemsGallery;