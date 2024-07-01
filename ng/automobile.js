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




// Image Source Arrays for each card
const imageSources = [
    ['Asset/1409e0.jpg', 'Asset/1909e0.jpg', 'Asset/609e0.jpg', 'Asset/2009e0.jpg', 'Asset/1509e0.jpg'], // for img1
    ['Asset/909e0.jpg', 'Asset/1309e0.jpg', 'Asset/809e0.jpg', 'Asset/1609e0.jpg', 'Asset/1209e0.jpg', 'Asset/1709e0.jpg'], // for img2
    ['Asset/3109e0.jpg', 'Asset/3209e0.jpg', 'Asset/3509e0.jpg', 'Asset/3409e0.jpg'], // for img3
    ['Asset/02_509e0.jpg'], // for img4
    ['Asset/209e0.jpg', 'Asset/709e0.jpg', 'Asset/409e0.jpg', 'Asset/509e0.jpg', 'Asset/609e0.jpg'], // for img5
    ['Asset/0109e0.jpg', 'Asset/01_309e0.jpg', 'Asset/01_709e0.jpg'] // for img6
];

// Current index trackers for each card
let currentImageIndices = [0, 0, 0, 0, 0, 0]; // Adjust the number based on your actual number of cards

// Function to change image in popup
function changePopupImage(imageSrc) {
    document.querySelector('.popup-img img').src = imageSrc;
}

// Function to open popup and start cycling images for a specific card
function openPopup(cardIndex) {
    changePopupImage(imageSources[cardIndex][currentImageIndices[cardIndex]]);
    document.querySelector('.popup-img').style.display = "block";
    document.querySelector('.popup-img').dataset.cardIndex = cardIndex; // Store current card index in popup for reference
}

// Event Listeners for Images
document.querySelectorAll('.card-container .card-img-top').forEach((image, index) => {
    image.addEventListener('click', function () {
        openPopup(index);
    });
});

// Event Listener for Closing the Popup
document.querySelector('.popup-img .times').addEventListener('click', function () {
    document.querySelector('.popup-img').style.display = "none";
});

// Event Listener for Cycling through Popup Images
document.querySelector('.popup-img img').addEventListener('click', function () {
    const currentCardIndex = document.querySelector('.popup-img').dataset.cardIndex;
    currentImageIndices[currentCardIndex] = (currentImageIndices[currentCardIndex] + 1) % imageSources[currentCardIndex].length;
    changePopupImage(imageSources[currentCardIndex][currentImageIndices[currentCardIndex]]);
});
