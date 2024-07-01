document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('Navbar'); // Get the navbar by ID
    const navLinks = navbar.querySelectorAll('.nav-link'); // Get all navigation links
    const navBtn = document.querySelector('.btb');

    window.addEventListener('scroll', function () {
        // Check the scroll position
        if (window.scrollY > 10) { // Trigger the color change after scrolling more than 10 pixels
            navbar.classList.add('nav-scrolled');
            // Change color of navigation links to white when scrolled
            navLinks.forEach(function (links) {
                links.classList.add('text-whit')

                navBtn.classList.add('change-color')
            });



        } else {
            navbar.classList.remove('nav-scrolled');
            // Change color of navigation links back to original color when not scrolled
            navBtn.classList.remove('change-color')
            navLinks.forEach(function (link) {
                link.classList.remove('text-whit');
            });

        }
    });


});



const imageSources = ['Asset/1409e0.jpg', 'Asset/1909e0.jpg', 'Asset/609e0.jpg', 'Asset/2009e0.jpg', 'Asset/1509e0.jpg'];
let currentImageIndex = 0;
let popupActive = false;

function openPopup(src) {
    document.querySelector('.popup-img img').src = src;
    document.querySelector('.popup-img').style.display = "block";
    popupActive = true;
}

function closePopup() {
    document.querySelector('.popup-img').style.display = "none";
    popupActive = false;
}

function changeImg() {
    if (popupActive) {
        currentImageIndex = (currentImageIndex + 1) % imageSources.length;
        document.querySelector('.popup-img img').src = imageSources[currentImageIndex];
    } else {
        let displayImg = document.querySelector('.img1');
        openPopup(displayImg.src);
    }
}

document.querySelector('.img1').addEventListener('click', changeImg);
document.querySelector('.popup-img img').addEventListener('click', changeImg);
document.querySelector('.popup-img .times').addEventListener('click', closePopup);

// Repeat similar functions for other image sets (imageSources1, imageSources2, etc.)

const imageSources1 = ['Asset/909e0.jpg', 'Asset/1309e0.jpg', 'Asset/809e0.jpg', 'Asset/1609e0.jpg', 'Asset/1209e0.jpg', 'Asset/1709e0.jpg'];
let currentImageIndex1 = 0;

function changeImg1() {
    if (popupActive) {
        currentImageIndex1 = (currentImageIndex1 + 1) % imageSources1.length;
        document.querySelector('.popup-img img').src = imageSources1[currentImageIndex1];
    } else {
        let displayImg1 = document.querySelector('.img2');
        openPopup(displayImg1.src);
    }
}

document.querySelector('.img2').addEventListener('click', changeImg1);

// Repeat for the other images

const imageSources2 = ['Asset/3309e0.jpg', 'Asset/3209e0.jpg', 'Asset/3509e0.jpg', 'Asset/3409e0.jpg'];
let currentImageIndex2 = 0;

function changeImg2() {
    if (popupActive) {
        currentImageIndex2 = (currentImageIndex2 + 1) % imageSources2.length;
        document.querySelector('.popup-img img').src = imageSources2[currentImageIndex2];
    } else {
        let displayImg2 = document.querySelector('.img3');
        openPopup(displayImg2.src);
    }
}

document.querySelector('.img3').addEventListener('click', changeImg2);

const imageSources4 = ['Asset/209e0.jpg', 'Asset/709e0.jpg', 'Asset/409e0.jpg', 'Asset/509e0.jpg', 'Asset/609e0.jpg'];
let currentImageIndex4 = 0;

function changeImg4() {
    if (popupActive) {
        currentImageIndex4 = (currentImageIndex4 + 1) % imageSources4.length;
        document.querySelector('.popup-img img').src = imageSources4[currentImageIndex4];
    } else {
        let displayImg4 = document.querySelector('.img5');
        openPopup(displayImg4.src);
    }
}

document.querySelector('.img5').addEventListener('click', changeImg4);

const imageSources5 = ['Asset/0109e0.jpg', 'Asset/01_309e0.jpg', 'Asset/01_709e0.jpg'];
let currentImageIndex5 = 0;

function changeImg5() {
    if (popupActive) {
        currentImageIndex5 = (currentImageIndex5 + 1) % imageSources5.length;
        document.querySelector('.popup-img img').src = imageSources5[currentImageIndex5];
    } else {
        let displayImg5 = document.querySelector('.img6');
        openPopup(displayImg5.src);
    }
}

document.querySelector('.img6').addEventListener('click', changeImg5);

// Event listener for closing the popup
document.querySelector('.popup-img .times').addEventListener('click', closePopup);
