function icon__close__top__fixed() {
    var element = document.getElementById("top-fixed");
    element.classList.add("disappear");
    var elementw = document.getElementById("header-bots");
    elementw.classList.add("margin-top-0");
}
$('.slider-banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: 'linear',
});

// counters js
// $(document).ready(function() {

//     var counters = $(".counters__number");
//     var countersQuantity = counters.length;
//     var counter = [];

//     for (i = 0; i < countersQuantity; i++) {
//         counter[i] = parseInt(counters[i].innerHTML);
//     }

//     var count = function(start, value, id) {
//         var localStart = start;
//         setInterval(function() {
//             if (localStart < value) {
//                 localStart++;
//                 counters[id].innerHTML = localStart;
//             }
//         }, );
//     }

//     for (j = 0; j < countersQuantity; j++) {
//         count(0, counter[j], j);
//     }
// });
// counters js

$('.counters__number').counterUp({ delay: 10, time: 5000 });