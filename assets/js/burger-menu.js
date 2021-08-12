$(document).ready(function() {
    $('#burger-menu').on('click', function() {
        var burgerMenu = $('.burger-menu');

        if (burgerMenu.hasClass('active')) {
            burgerMenu.slideUp().removeClass('active');
        } else {
            burgerMenu.slideDown().addClass('active');
        }
    });
});