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



const text1 = 'Power Life on Your Terms'
const text2 = 'Get ahead of your energy needs with cutting-edge solar and home backup'
const textElement1 = document.querySelector('.fst-head')
const textElement2 = document.querySelector('#text2')



let index1 = 0;
let index2 = 0;

function typeWriter1() {
    if (index1 < text1.length) {
        textElement1.innerHTML += text1.charAt(index1);
        index1++;
        setTimeout(typeWriter1, 30);
    }
}

function typeWriter2() {
    if (index2 < text2.length) {
        textElement2.innerHTML += text2.charAt(index2);
        index2++;
        setTimeout(typeWriter2, 30);
    }
}



typeWriter1()
setTimeout(typeWriter2, text1.length * 30); // Start second animation after the first one finishes



document.querySelector('#zip').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
})
