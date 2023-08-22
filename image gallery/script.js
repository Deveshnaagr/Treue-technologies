const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const caption = document.querySelector('.caption');
const closeButton = document.querySelector('.close');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        showLightbox(index);
    });
});

function showLightbox(index) {
    lightboxImage.src = `image${index + 1}.jpg`;
    caption.textContent = `Image ${index + 1}`;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = thumbnails.length - 1;
    } else if (currentIndex >= thumbnails.length) {
        currentIndex = 0;
    }
    showLightbox(currentIndex);
}

closeButton.addEventListener('click', closeLightbox);
prevButton.addEventListener('click', () => changeImage(-1));
nextButton.addEventListener('click', () => changeImage(1));
