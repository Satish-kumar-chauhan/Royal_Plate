function openModal()
{
    document.getElementById("gallery-modal").style.display = "block";
    
}
function closeModal()
{
    document.getElementById("gallery-modal").style.display = "none";
}

var slideIndex = 1;
galleryShow(slideIndex);
function plus(n)
{
    galleryShow(slideIndex+=n);
}
function currentSlide(n)
{
    galleryShow(slideIndex=n);
}
function galleryShow()
{
    var myslides = document.getElementsByClassName("g-slide");
    var thumb = document.getElementsByClassName("thumb");
    for(var i=0;i<myslides.length;i++)
    {
        myslides[i].style.display="none";
    }
    if(slideIndex>myslides.length)
    {
        slideIndex=1;
    }
    if(slideIndex<1)
    {
        slideIndex=myslides.length;
    }
    for(var i=0;i<thumb.length;i++)
    {
        thumb[i].className=thumb[i].className.replace(" active", "");
    }
    myslides[slideIndex-1].style.display = " block";
    thumb[slideIndex-1].className += " active";

}