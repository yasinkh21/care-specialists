const navbar = decument.queryselector('.navbar')

window.addEventListener("scroll",()=>{
    if (scrollY > 62 ){
        navbar.classList.add('fixedd')
    }else {
        navbar.classList.remove('fixedd')
    }


})


