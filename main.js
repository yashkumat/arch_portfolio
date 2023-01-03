$('.image_prev').on({
    click: changeBg
})

function changeBg (url) {
    $('.img').css('background-image', 'url('+url+')'); // changes background on click
}

function handlePageLoaded(){
    setTimeout(()=>{
        document.getElementById("loading-screen").style.display = "none";
    }, 1000)
}