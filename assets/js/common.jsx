import 'bootstrap/dist/css/bootstrap.css';
// import './../../css/main.css';

// TODO: Refactor
jQuery(document).ready(function($){
    var $mobileMenu = $('.mobile-menu');

    $('.close-mobile-menu').click(function(){
        $mobileMenu.removeClass('open');
    });
    $('.menu-btn').click(function(){
        $mobileMenu.addClass('open');
    });

    $('.have-sub-mobile-menu').click(function(){
        $(this).next('ul').slideToggle();
    });
});