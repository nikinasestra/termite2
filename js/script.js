const galleryImage = document.querySelector('#galleryImage');
const galleryNext = document.querySelector('#galleryNext');

const images = [
  'assets/images/bigimg1.png',
  'assets/images/bigimg2.png',
  'assets/images/bigimg3.png'
];

let currentImage = 0;

galleryNext.addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  galleryImage.src = images[currentImage];
});