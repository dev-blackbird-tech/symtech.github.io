const translationDistance = 40; // Adjust the distance of translation
const translatingImage = document.querySelector('#translatingImage');

// Function to continuously translate the image up and down
function translateImage() {
    translatingImage.style.transform = 'translateY(' + translationDistance + 'px)';
    setTimeout(function () {
        translatingImage.style.transform = 'translateY(-' + translationDistance + 'px)';
        setTimeout(translateImage, 2000); // Adjust the interval as needed
    }, 2000);
}

// Start the translation animation
translateImage();




// Function to animate the count with a plus sign in front
function animateCount(element) {
    const target = +element.getAttribute('data-count');
    const count = +element.innerText.replace(/\D/g, ''); // Remove non-numeric characters
    const speed = 30000; // Adjust the speed for a slower animation

    const inc = target / speed;

    if (count < target) {
        element.innerText = Math.ceil(count + inc) + "+"; // Add the plus sign in front
        setTimeout(() => animateCount(element), 10); // Adjust the timeout for a smoother animation
    } else {
        element.innerText = target + "+"; // Add the plus sign in front
    }
}

// Function to handle scroll event and trigger animation
function handleScroll() {
    const countItems = document.querySelectorAll('.count-item');

    countItems.forEach(item => {
        if (isElementInViewport(item)) {
            animateCount(item.querySelector('h1'));
        }
    });
}

// Function to check if element is in view
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Initial check when page loads
handleScroll();