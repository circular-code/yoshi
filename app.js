"use strict";
/* jshint -W117 */
/* jshint -W098 */

setTimeout(function() {
    var mailTo = $('#mailTo');
    mailTo.attr('href', decodeURIComponent(mailTo.attr('href')).replace('{at}', '@'));
},1000);

$('.fold').on('click', function() {

    var target = $(this),
        targetList = target.find('ul'),
        icon = target.find('.toggle-icon');

    targetList.stop();

    if (target.hasClass('active')) {
        targetList.slideUp();
        target.removeClass('active');
        icon.removeClass('fa-chevron-up');
        icon.addClass('fa-chevron-down');
    }
    else {
        targetList.slideDown();
        target.addClass('active');
        icon.addClass('fa-chevron-up');
        icon.removeClass('fa-chevron-down');
    }

});