var x = window.matchMedia("(min-width:768px)");

function myFunction(x){
    if(x.matches){
        $(window).scroll(function()
{
     if($(window).scrollTop()>45)
     {     
         $("#topscroll").fadeIn();
        //  $("#cartOpen").fadeIn();
     }
     else
     {
         $("#topscroll").fadeOut();
        //  $("#cartOpen").fadeOut();
     }
});
                 }
    else{
        
        }
}
myFunction(x);
x.addEventListener('resize',myFunction);


// JQuery Codes
/*$(window).scroll(function()
{
     if($(window).scrollTop()>45)
     {     
         $("#topscroll").fadeIn();
        //  $("#cartOpen").fadeIn();
     }
     else
     {
         $("#topscroll").fadeOut();
        //  $("#cartOpen").fadeOut();
     }
});*/


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
/*
function validateForm()
{
    let username =document.forms["loginform"]["personid"].value;
    let userpwd =document.forms["loginform"]["personpwd"].value;
    if(username=="" && userpwd=="")
    {
        alert("Login Credential can't be blank");
    }
    else
    {
    if(username==1234 && userpwd==1234)
    {
        document.getElementById("main-modal").style.display = "none";
        document.getElementById("loginMassage").innerHTML = "Login Succesfull";
    }
    else
    {
        alert("Please enter correct credential");
    }
    }
}*/




 


