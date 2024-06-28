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
function changeImg() {
    let displayImg = document.querySelector('.img1');

    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    displayImg.src = imageSources[currentImageIndex];



}

const imageSources1 = ['Asset/909e0.jpg', 'Asset/1309e0.jpg', 'Asset/809e0.jpg', 'Asset/1609e0.jpg', 'Asset/1209e0.jpg', 'Asset/1709e0.jpg']

let currentImageIndex1 = 0;

function changeImg1() {
    let displayImg1 = document.querySelector('.img2');

    currentImageIndex = (currentImageIndex + 1) % imageSources1.length;
    displayImg1.src = imageSources1[currentImageIndex];
}


const imageSources2 = ['Asset/3309e0.jpg', 'Asset/3209e0.jpg', 'Asset/3509e0.jpg', 'Asset/3409e0.jpg']
let currentImageIndex2 = 0;

function changeImg2() {
    let displayImg2 = document.querySelector('.img3');

    currentImageIndex = (currentImageIndex + 1) % imageSources2.length;
    displayImg2.src = imageSources2[currentImageIndex];
}




const imageSources4 = ['Asset/209e0.jpg', 'Asset/709e0.jpg', 'Asset/409e0.jpg', 'Asset/509e0.jpg', 'Asset/609e0.jpg']
let currentImageIndex4 = 0;

function changeImg4() {
    let displayImg4 = document.querySelector('.img5');

    currentImageIndex = (currentImageIndex + 1) % imageSources4.length;
    displayImg4.src = imageSources4[currentImageIndex];
}




const imageSources5 = ['Asset/0109e0.jpg', 'Asset/01_309e0.jpg', 'Asset/01_709e0.jpg',]
let currentImageIndex5 = 0;

function changeImg5() {
    let displayImg5 = document.querySelector('.img6');

    currentImageIndex = (currentImageIndex + 1) % imageSources5.length;
    displayImg5.src = imageSources5[currentImageIndex];
}