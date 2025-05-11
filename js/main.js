const navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener("scroll", () => {
    if (scrollY > 62) {
        navbar.classList.add('fixedd');
    } else {
        navbar.classList.remove('fixedd');
    }
});


// Add active class to the current button (highlight it)
const nav = document.getElementById("navUl");
const navLinks = nav.getElementsByClassName("nav-link");
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active-nav")[0];
        current.className = current.className.replace("active-nav", "");
        navLinks[i].classList.add("active-nav");
    });
}
