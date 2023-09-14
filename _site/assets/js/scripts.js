var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    // cellAlign: 'left',
    contain: true,
    // freeScroll: true,
    // wrapAround: true,
    fullscreen: true
});

const players = Plyr.setup('.js-player');