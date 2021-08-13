//#region scroll
if (window.screen.width > 1072) {
    let lastScrollTop = 0;
    window.onscroll = function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > 100) {
            if (st > lastScrollTop) {
                // downscroll code
                $(".header-bot").removeClass("fixed")
            } else {
                // upscroll code
                $(".header-bot").addClass("fixed")
            }
        } else {
            $(".header-bot").removeClass("fixed")
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }
}
//#endregion

if (window.screen.width <= 1072) {
    let heightHeader = $(".header-mobile").outerHeight()
    $(".banner__slider").css("margin-top", `${heightHeader}px`)
}

function loading() {
    $(".ld-wrap").fadeIn();
    return false;
}

function offloading() {
    $(".ld-wrap").fadeOut();
    return false;
}