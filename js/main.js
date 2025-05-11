const navbar = decument.queryselector('.navbar');
console.log(43434)

window.addEventListener("scroll",()=>{
    console.log(2323232)
    if (scrollY > 62 ){
        navbar.classList.add('fixedd')
    }else {
        navbar.classList.remove('fixedd')
    }


})


