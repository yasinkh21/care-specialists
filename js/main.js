const navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener("scroll", () => {
    if (scrollY > 62) {
        navbar.classList.add('fixedd');
    } else {
        navbar.classList.remove('fixedd');
    }
});


// Add active class to the current button (highlight it)
var nav = document.getElementById("navUl");
var navlinks = nav.getElementsByClassName("nav-link");
for (var i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-nav");
  current.className = current.className.replace("active-nav", "");
  this.className += "active-nav";
  });
}