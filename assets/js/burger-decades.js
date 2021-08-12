$(document).ready(function() {
    $('#burger-decades').on('click', function() {
        var burgerDecadesMenu = $('.burger-menu-decades');

        if (burgerDecadesMenu.hasClass('active')) {
            burgerDecadesMenu.slideUp().removeClass('active');
        } else {
            burgerDecadesMenu.slideDown().addClass('active');
        }
    });
});