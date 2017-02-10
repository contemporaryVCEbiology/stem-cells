$(document).ready(function(){
   
    /*
     * hover handler for resource box to show 'open' and 'open in new tab' links
     */
    $('.resource').hover(function(){
        $(this).addClass('hover').find('.overlay').fadeIn();   
    }, function(){
        $(this).removeClass('hover').find('.overlay').fadeOut();
    });
    
    /*
     * add expand link before hidden content in resource, for long content
     */
    $('.resource .more').before('<a href="" class="expand">More</a>');
    /*
     * click handler for more links
     */
    $('.resource').on('click','.expand',function(event){
        event.preventDefault();
        if(!$(this).hasClass('disabled')){
            $(this).next().slideDown();
        }
        $(this).addClass('disabled');
    });
    /*
     * hover handler for slide down links
     */
    $('.slide-down-link').on('mouseover', function(){
        $(this).next('.slide-down-content').slideDown();
    });
    $('.slide-down-link').on('click', function(event){
        event.preventDefault();
    });

    /* smooth scroll https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    });
});
$(document).on("scroll  touchmove",function(){
    if($(document).scrollTop()>100){
        $('.site-header nav').addClass('scroll');
    } else{
        $('.site-header nav').removeClass('scroll');
    }  
});