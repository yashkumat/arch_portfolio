$('.image_prev').on({
    click: changeBg
})

function changeBg (url) {
    $('.img').css('background-image', 'url('+url+')'); // changes background on click
}

function handlePageLoaded(){
    var heights = window.innerHeight;
    document.getElementById(".content").style.height = heights + "px";
    setTimeout(()=>{
        document.getElementById("loading-screen").style.display = "none";
    }, 1000)
}
