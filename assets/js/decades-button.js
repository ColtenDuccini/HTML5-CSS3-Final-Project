$(document).ready(function() {
    $('#decades-button').on('click', function() {
        var decadesMenu = $('.decades-menu');

        if (decadesMenu.hasClass('active')) {
            decadesMenu.slideUp().removeClass('active');
        } else {
            decadesMenu.slideDown().addClass('active');
        }
    });
});