var $ = require('jquery');

$(function () {

    const stickyHeaderHandler = () => {

        let scrollTop = $(window).scrollTop();
        let headerHeight = $('.header').outerHeight();

        if (scrollTop > headerHeight) {

            $('.header').addClass('-isStuck');

        } else if ($('.header').hasClass('-isStuck') && scrollTop == 0) {

            $('.header').removeClass('-isStuck');

        }

    }

    $(window).on('scroll', () => {

        stickyHeaderHandler();

    });

});