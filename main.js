$('.image_prev').on({
    click: changeBg
})

function changeBg (url) {
    $('.img').css('background-image', 'url('+url+')'); // changes background on click
}

function handlePageLoaded(){
    var heights = window.innerHeight;
    document.getElementById("content").style.height = heights + "px";
    document.getElementById("bg").style.height = heights + "px";
    setTimeout(()=>{
        document.getElementById("loading-screen").style.display = "none";
    }, 1000)
}

var originalContent = '';

$(window).resize(function() {
if (window.innerWidth < 480) {

    originalContent = $('.ctc_button').innerHTML;

    $('.ctc_button').replaceWith('<a class="ctc_button" href="https://calendly.com/ykumat/30min="><i class="fa-solid fa-calendar-days"></i></a>');

} else if (window.innerWidth > 480) {

    // Change back to original .LatestNews
    $('.LatestNews').innerHTML = originalContent;
}
}).resize();