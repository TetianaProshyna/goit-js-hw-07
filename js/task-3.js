const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/* First solution */

// const createGalleryListItems = listItems =>
//   listItems.map(item => {
//     const itemRef = document.createElement('li');
//     itemRef.classList.add('gallery__item');
//     itemRef.insertAdjacentHTML(
//       'afterbegin',
//       `<img
//         src="${item.url}"
//         alt="${item.alt}"
//         class= "gallery__img"
//       />`,
//     );
//     return itemRef;
//   });
// const galleryListRef = document.querySelector('#gallery');
// galleryListRef.classList.add('gallary__list');

// galleryListRef.append(...createGalleryListItems(images));

/* Second solution */

// const createGalleryListItems = listItems => {
//   let stringHTML = '';
//   listItems.forEach(item => {
//     stringHTML += `<li class="gallery__item">
//     <img src="${item.url}"
//     alt="${item.alt}"
//     class= "gallery__img"/></li>`;
//   });
//   return stringHTML;
// };
// const galleryListRef = document.querySelector('#gallery');
// galleryListRef.classList.add('gallary__list');

// galleryListRef.insertAdjacentHTML('afterbegin', createGalleryListItems(images));

/* Third solution */

const createGalleryListItems = listItems => {
  return listItems.reduce((acc, item) => {
    acc += `<li class="gallery__item">
    <img src="${item.url}" 
    alt="${item.alt}" 
    class= "gallery__img"/></li>`;
    return acc;
  }, '');
};
const galleryListRef = document.querySelector('#gallery');
galleryListRef.classList.add('gallary__list');

galleryListRef.insertAdjacentHTML('afterbegin', createGalleryListItems(images));
