$('.opinions__slider').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 2,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    cssEase: 'linear',
    responsive: [{

        breakpoint: 480,
        settings: {
            centerMode: true,
            slidesToShow: 0
        }

    }]
});