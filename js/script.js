$(window).on("scroll", function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        $(".navbar").css("background", "rgb(105, 218, 30)");
        $(".nav-link").css("color","white");
    } else {
        $(".navbar").css("background", "transparent");
    }
});

$('.page-scroll').on('click',function(e) {
    
    // mengambil atribut
    var href = $(this).attr('href');
    var elemenhref = $(href);
    // console.log(elemenhref.offset().top);
    $('html , body').animate({
        scrollTop:elemenhref.offset().top -60
    }, 500, 'swing');
    e.preventDefault();
})