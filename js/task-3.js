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

const createGalleryListItems = listItems =>
  listItems.map(function (item) {
    const itemRef = document.createElement('li');
    // const imgRef = document.createElement('img');
    // imgRef.src = item.url;
    // imgRef.alt = item.alt;
    // imgRef.classList.add('gallery__img');
    // // itemRef.insertAdjacentElement('beforeend', imgRef);
    // console.log(imgRef);
    console.log(`<img src=​"${item.url}" alt="​${item.alt}">​`);
    itemRef.insertAdjacentHTML(
      'beforeend',
      `<img src=​"${item.url}" alt="​${item.alt}">​`,
    );
    return itemRef;
  });
const galleryListRef = document.querySelector('#gallery');
galleryListRef.classList.add('gallary__list');

galleryListRef.append(...createGalleryListItems(images));
