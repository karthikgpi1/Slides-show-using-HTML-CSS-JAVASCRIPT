var slides = document.querySelector('.slider-items').children;
var dots = document.querySelectorAll(".dot");
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");                            
var index = 0;
var totalSlides = slides.length;

//--------------------------------------------------
nextSlide.onclick = function () {
    next("next");
            
}
prevSlide.onclick = function () {
    next("prev");
    
}
function next(direction) {
    if(direction=="next") {
        index++;
        if(index==totalSlides){
            index=0;
        }     
    }
    else{    
        if(index==0){
            index=totalSlides-1;
        }
        else{
            index--;
        }
    }
    for(i=0; i<slides.length; i++){
        slides[i].classList.remove("active"); 
    }
    slides[index].classList.add("active");
     

//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace("active","");
//     }
//     dots[index -1].className += "active";   
}



//-----------------------auto-----------

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.querySelector('.slider-items').children;
    for(i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}
