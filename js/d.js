$(function(){

    let header = $("#header");
    let headerMain = $("#header-main");
    let headerMainH = headerMain.innerHeight();
    let scrollPos = $(window).scrollTop();
     //innerHeight- учитвается с padding
    // height - не учитывает

    $(window).on("scroll load resize", function(){
        headerMainH = headerMain.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > headerMainH ){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        console.log(scrollPos);

    })
    // Следить за событием скролла 
    console.log(headerMainH);

   
});