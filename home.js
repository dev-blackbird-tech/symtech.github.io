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



const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('right')) {
        entry.target.classList.add('in-view-right');
      } else if (entry.target.classList.contains('left')) {
        entry.target.classList.add('in-view-left');
      }
      observer.unobserve(entry.target); // Stop observing once animation has started
    }
  });
}, { threshold: 0.1 });

const elements = document.querySelectorAll('.left, .right');
elements.forEach(el => {
  observer.observe(el);
});



document.getElementById("missionBtn").addEventListener("click", function () {
  document.getElementById("visionContent").style.display = "none";
  document.getElementById("missionContent").style.display = "block";
});

document.getElementById("visionBtn").addEventListener("click", function () {
  document.getElementById("missionContent").style.display = "none";
  document.getElementById("visionContent").style.display = "block";
});