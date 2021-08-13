 //#region init slick

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

 /*
  ** With Slick Slider Plugin : https://github.com/marvinhuebner/slick-animation
  ** And Slick Animation Plugin : https://github.com/marvinhuebner/slick-animation
  */

 // Init slick slider + animation
 $('.slider').slick({
     autoplay: true,
     speed: 800,
     lazyLoad: 'progressive',
     arrows: true,
     dots: false,
     prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
     nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
 }).slickAnimation();



 $('.slick-nav').on('click touch', function(e) {

     e.preventDefault();

     var arrow = $(this);

     if (!arrow.hasClass('animate')) {
         arrow.addClass('animate');
         setTimeout(() => {
             arrow.removeClass('animate');
         }, 1600);
     }

 });
 //#endregion
 //#region tabs js
 function openCity(evt, cityName) {
     var i, tabcontent, tablinks;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tabpanel-link__btn");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" tabpanel-link__btn--active", "");
     }
     document.getElementById(cityName).style.display = "block";
     evt.currentTarget.className += " tabpanel-link__btn--active";
 }
 document.getElementById("defaultOpen").click();

 //tabs js vertical
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
 //#endregion