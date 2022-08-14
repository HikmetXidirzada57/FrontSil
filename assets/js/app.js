var header=document.querySelector(".header");

window.addEventListener('scroll', function(){
    if(scrollY>120){
        header.classList.add("active-header");
    }else{
        header.classList.remove("active-header");

    }
})