let currentImage = 0;

let images = [
    "mountain.jpg",
    "beach.jpg",
    "flower.jpg",
    "sunset.jpg",
    "forest.jpg",
    "waterfall.jpg"
];

function openImage(index) {
    currentImage = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[currentImage];
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById("lightbox-img").src = images[currentImage];
}

function prevImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    document.getElementById("lightbox-img").src = images[currentImage];
}