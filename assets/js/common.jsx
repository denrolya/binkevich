const routes = require('../../web/js/fos_js_routes.json');
import Routing from '../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';

Routing.setRoutingData(routes);

// TODO: Refactor
jQuery(document).ready(function ($) {
    const $mobileMenu = $('.mobile-menu');

    $('.close-mobile-menu').click(function () {
        $mobileMenu.removeClass('open');
    });
    $('.menu-btn').click(function () {
        $mobileMenu.addClass('open');
    });

    $('.have-sub-mobile-menu').click(function () {
        $(this).next('ul').slideToggle();
    });
});

window.addEventListener('load', function () {
    window.cookieconsent.initialise({
        'palette': {
            'popup': {
                'background': '#ffffff',
                'text': '#000000'
            },
            'button': {
                'background': '#9fc6c6',
                'text': '#ffffff'
            }
        },
        'theme': 'edgeless',
        'position': 'bottom-right'
    })
});