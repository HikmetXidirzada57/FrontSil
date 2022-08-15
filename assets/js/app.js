var header=document.querySelector(".header");

window.addEventListener('scroll', function(){
    if(pageYOffset>550){
        header.classList.add("active-header");
    }else{
        header.classList.remove("active-header");

    }
    console.log(pageYOffset)
})