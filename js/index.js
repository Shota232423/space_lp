$(function () {
    $('.ac-parent').on('click', function () {
    $(this).next().slideToggle();
    if($(this).children().next().text()=="expand_more"){
        $(this).children().next().text("expand_less");
    }else{
        $(this).children().next().text("expand_more");
    }
  });

    $('.hamburger').click(function(){
        $('.hamburger_menu').toggleClass('open');
        $('.hamburger').children('span').toggleClass('hamburger_white');
    });

});