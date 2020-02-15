$(window).scroll(function(){
    let scrollDist=$(document).scrollTop();
    if(scrollDist <10){
        $(".discover-text,.discover-image").hide()&&
        $(".menu-text,.menu-pic").hide();
    }
    
    else if
    (scrollDist >300 ){
        $(".discover-text,.discover-image").delay().fadeIn();
       
    }
    if
        (scrollDist >1400){
            $(".menu-text,.menu-pic").slideDown();
    }

});