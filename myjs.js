
const x = window.matchMedia("(min-width:768px)");
function myFunction(x){
    if(x.matches){
window.onscroll = function(){
    if(document.documentElement.scrollTop>45){
        document.getElementById("topscroll").style.display = "block";
        document.getElementById("main-container").classList.add('fixed-header');  
        document.getElementById("nav-logo").classList.add('fixed-logo');  
                                 }
    else{
        document.getElementById("topscroll").style.display = "none";
        document.getElementById("main-container").classList.remove('fixed-header'); 
        document.getElementById("nav-logo").classList.remove('fixed-logo');   
        }
                            }
}   
else{
    
    window.onscroll = function(){
        if(document.documentElement.scrollTop>45){
            document.getElementById("topscroll").style.display = "block";
            // document.getElementById("main-container").classList.add('fixed-header2');  
            document.getElementById("nav-logo").classList.add('nav-logo');  
            // document.getElementById("nav-logo").classList.remove('fixed-logo');    
                                    }
        else{
            document.getElementById("topscroll").style.display = "none";
            // document.getElementById("main-container").classList.remove('fixed-header2'); 
            document.getElementById("nav-logo").classList.remove('nav-logo');   
            }
            
           
        }                          
}
}


x.addListener(myFunction);
myFunction(x);


$("#topscroll").click(function()
{
 $("html,body").animate({scrollTop:0},2000);
});

// Slideshow
var slideInterval = setInterval(slideShow,3000);
var index =0;
slideShow(index);
function cSlide(n)
{
    slideShow(index=n);
}
function slideShow()
{
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for(var i=0;i<slides.length;i++)
    {
        slides[i].style.display = "none";
    }
    index++;
    if(index>slides.length)
    {
        index=1;
    }
     if(index<1)
     {
         index=slides.length;
     }
    for(var i=0;i<dots.length;i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[index-1].style.display = "block";
    dots[index-1].className +=" active";
}


 


