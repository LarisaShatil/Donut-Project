    $(function () {
        $('.slider').slick({
        infinite: true,
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                infinite: true,
                dots: true,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1500,
              }
            },
          ]
        });
    });