var slideIndex=0;
showSlideIndex(slideIndex);
function plusSlides(n)
{
    slideIndex+=n;
    showSlideIndex(slideIndex);
}
function showSlideIndex(n)
{
    var slide=document.getElementsByClassName("slide-img");
    if(n==slide.length){
        slideIndex=0;
    }
    if(n<0){
        slideIndex=slide.length-1;
    }
    for(var i=0; i<slide.length; i++)
    {
        slide[i].style.display="none";
    }
    slide[slideIndex].style.display="block";
}


function openNav()
{
    var leftNav=document.getElementById("left-navbar-container");
    var cross=document.getElementById("left-navbar-cross");
    var body=document.getElementsByTagName("body");
    var main=document.getElementById("main");
    body[0].style.position="fixed";
    main.style.backgroundColor="black";
    main.style.opacity="0.3";
    cross.style.width="3%";
    cross.style.zIndex="1";
    leftNav.style.width="365px";

}
function openCross()
{
    var leftNav=document.getElementById("left-navbar-container");
    var cross=document.getElementById("left-navbar-cross");
    var body=document.getElementsByTagName("body");
    var main=document.getElementById("main");
    body[0].style.position="relative";
    main.style.opacity="1";
    cross.style.width="0";
    cross.style.zIndex="-1";
    leftNav.style.width="0";
}
var slideIndex2=0;
showSlideIndex2(slideIndex2);
function plusSlides2(n){
    slideIndex2+=n;
    showSlideIndex2(slideIndex2);
}
function showSlideIndex2(n)
{
    var display=document.getElementsByClassName("side-bar-2");
   
    if(n==display.length)
    {
        slideIndex2=0;
    }
    if(n<0)
    {
       slideIndex2=display.length-1;
    }
    for(var i=0; i<display.length; i++)
    {
        display[i].style.display="none";
    }
    display[slideIndex2].style.display="block";
    
}
function displayCountry(){
    var countryDisplay=document.getElementById("country");
    countryDisplay.style.zIndex="1";
}
function closeDisplay(){
    var countryDisplay=document.getElementById("country");
    countryDisplay.style.zIndex="-1";
}