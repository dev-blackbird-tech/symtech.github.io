document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('Navbar'); // Get the navbar by ID
    const navLinks = document.querySelectorAll('.nav-link'); // Get all navigation links
    const navBtb = document.querySelector('.btb'); // Get all navigation


    window.addEventListener('scroll', function () {
        // Check the scroll position
        if (window.scrollY > 10) { // Trigger the color change after scrolling more than 10 pixels
            navbar.classList.add('nav-scrolled');
            navLinks.forEach(function (links) {
                links.classList.add('black-text');
            })

            navBtb.classList.add('btb-change')

        } else {
            navbar.classList.remove('nav-scrolled');
            navLinks.forEach(function (links) {
                links.classList.remove('black-text');
            })

            navBtb.classList.remove('btb-change')
        }
    });
});


function animateBars() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const height = bar.getAttribute('data-height');
        bar.style.height = height;
    });
}

function handleScroll() {
    const chartSection = document.getElementById('chartSection');
    const rect = chartSection.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        animateBars();
        window.removeEventListener('scroll', handleScroll);
    }
}

window.addEventListener('scroll', handleScroll);