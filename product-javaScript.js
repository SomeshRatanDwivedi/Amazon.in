
function openImg(element){
    var img=element.id;
    var rightImg=document.getElementById("img-content");
    if(img=="img1")
    {
        rightImg.setAttribute("src", "https://m.media-amazon.com/images/I/71Od5yJbohL._SX679_.jpg");
    }
    else if(img=="img2")
    {
        rightImg.setAttribute("src", "https://m.media-amazon.com/images/I/81a776JhZAL._SX425_.jpg");
    }
    else if(img=="img3")
    {
        rightImg.setAttribute("src","https://m.media-amazon.com/images/I/61Pe7OzvLOL._SX425_.jpg" );
    }
    else if(img=="img4")
    {
        rightImg.setAttribute("src","https://m.media-amazon.com/images/I/61dtLQrQASL._SX425_.jpg" );
    }
    else if(img=="img5")
    {
        rightImg.setAttribute("src", "https://m.media-amazon.com/images/I/61FRBJU-9pL._SX425_.jpg");
    }
    else if(img=="img6")
    {
        rightImg.setAttribute("src", "https://m.media-amazon.com/images/I/61imFjmQ9nL._SX425_.jpg");
    }
    else
    {
        rightImg.setAttribute("src","https://m.media-amazon.com/images/I/51kpQGK2O3L._SL1500_.jpg" );
    }

}