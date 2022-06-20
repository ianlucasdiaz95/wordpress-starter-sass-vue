/***
 * Product Carrousel with Slick JS
 */
//Import slick-carrousel

import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel'



$(function () {

    

    $('.productList__slider').each(function () {

        var productSlider = $(this);

        productSlider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 4500,
            infinite: false,
            arrows: true,
            adaptiveHeight: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: 'unslick'
                }
            ]
        });

        var lastSlide = 0;

        productSlider.on("afterChange", function (event, slick, currentSlide, nextSlide) {
            if (currentSlide === lastSlide) {
                productSlider.slick("slickGoTo", 0);
            }

            lastSlide = currentSlide;
        });

        
    });

    

});