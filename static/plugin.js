/* jslint plusplus: true, evil:true */
/* globel $, jQuery, console, document, window, alert, prompt, confirm */

/* start section loading */

$(document).ready(function () {
    'use strict';
    $(".loading .spinner").fadeOut(2000, function () {
        $(this).parent().fadeOut(2000, function () {

            $(this).remove();
        });
    });
});
/* end section loading */

$(function () {

    'use strict';
    var nav = $('.navbar').innerHeight();
    $('.windowHeight').height($(window).innerHeight() - nav);
    $(window).resize(function () {
        $('.windowHeight').height($(window).innerHeight() - nav);
    });
    console.log("Header = Window Height");
});



$(document).ready(function () {
    $(function () {

        'use strict';

        $(".welcomeMessage ").each(function () {

            $(this).animate({

                right: 0

            }, 4000, function () {

                $(this).delay(3000).animate({

                    right: -400

                }, 1000);
            });
        });
    });
});
$(function () {
    'use strict';

    var placeAttr = '';

    $('[placeholder]').focus(function () {
        placeAttr = $(this).attr('placeholder');
        $(this).attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', placeAttr);
    });
});
/***********************************************************************/

$(function () {
    'use strict';

    $('<span class="asterisk">*</span>').insertBefore(':input[required]');

    $('.asterisk').parent('div').css('position', 'relative');

    $('.asterisk').each(function () {
        $(this).css({
            'position': 'absolute',
            'top': $(this).innerHeight() / 2,
            'left': $(this).parent('div').find(':input').innerWidth() - 40,
            'color': '#f00',
            'font-weight': 'bold'
        });
    });
});

$(".toggle").on('click', function () {

    "use strict";
    $(".toggleElement").fadeToggle(10);
});
