document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('Navbar'); // Get the navbar by ID
    const navLinks = navbar.querySelectorAll('.nav-link'); // Get all navigation links
    const navBtn = document.querySelector('.btb');

    window.addEventListener('scroll', function () {
        // Check the scroll position
        if (window.scrollY > 10) { // Trigger the color change after scrolling more than 10 pixels
            navbar.classList.add('nav-scrolled');
            navBtn.classList.add('change');


            // Change color of navigation links to white when scrolled
            navLinks.forEach(function (link) {
                link.classList.add('text-whit');
            });
        } else {
            navbar.classList.remove('nav-scrolled');
            navBtn.classList.remove('change');
            // Change color of navigation links back to original color when not scrolled

            navLinks.forEach(function (link) {
                link.classList.remove('text-whit');
            });
        }
    });

    // Initial check for scroll position on page load
    if (window.scrollY > 10) { // Adjust 10 to your desired scroll position
        navLinks.forEach(function (link) {
            link.classList.add('text-whit');
        });
    }
});
