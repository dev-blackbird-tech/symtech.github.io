let modal = document.getElementById("myModal");
let btn = document.getElementById("openModal");
let span = document.getElementsByClassName("close")[0];
let trans = document.querySelector(".modal-content")

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





let nav = document.querySelector('#navBar')
let navLinks = document.querySelectorAll('.nav-link')

window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
        nav.classList.add('nav-scrolled')
        btn.classList.add('black-text')
        navLinks.forEach((links) => {
            links.classList.add('black-text')
        })
    } else {
        nav.classList.remove("nav-scrolled")
        btn.classList.remove('black-text')
        navLinks.forEach((links) => {
            links.classList.remove('black-text')
        })
    }
})




