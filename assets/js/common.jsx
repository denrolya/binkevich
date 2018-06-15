import 'bootstrap/dist/css/bootstrap.css';
const routes = require('../../web/js/fos_js_routes.json');
import Routing from '../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';

Routing.setRoutingData(routes);
// import './../../css/main.css';

// TODO: Refactor
jQuery(document).ready(function($){
    const $mobileMenu = $('.mobile-menu');

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