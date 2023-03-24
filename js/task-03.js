const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryEl = document.querySelector('.gallery');
const imageMarkup = [];

for (const image of images) {
  imageMarkup.push(`<li> <img width='500px' src=${image.url} alt=${image.alt} /> </li>`);
}
galleryEl.insertAdjacentHTML('afterbegin', imageMarkup.join(''));

galleryEl.style.listStyleType = 'none';
galleryEl.style.display = 'flex';
galleryEl.style.gap = '20px';
galleryEl.style.flexWrap = 'wrap';
galleryEl.style.justifyContent = 'center';
