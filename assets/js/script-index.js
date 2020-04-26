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
$('.media-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: 'linear',
});
$('.Portfolio__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: 'linear',
});
$('.Agriya-News__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: 'linear',
});
$('.Featured-In__content__list-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    responsive: [{
            breakpoint: 1126,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1
            }
        }
    ]
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

// $(document).on('click', '.bidding-menu-link', function() {
//     $(this).addClass('bidding-menu-link--active').siblings().removeClass('bidding-menu-link--active')
// })

function openbinding(evt, biddingname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("bidding-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("bidding-menu-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" bidding-menu-link--active", "");
    }
    document.getElementById(biddingname).style.display = "block";
    evt.currentTarget.className += " bidding-menu-link--active";
}
document.getElementById("defaultOpen-binding").click();