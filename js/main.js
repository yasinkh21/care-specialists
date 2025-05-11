const navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener("scroll", () => {
    if (scrollY > 62) {
        navbar.classList.add('fixedd');
    } else {
        navbar.classList.remove('fixedd');
    }

})


