$(function(){
    $(".rate-star").rateYo({
        starWidth: "12px",
        rating: 5,
        readOnly: true
    });
    $('.product-slider__inner').slick({
        dots:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false
    });

    $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active');
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });




    var mixer = mixitup('.products__inner-box');
});
