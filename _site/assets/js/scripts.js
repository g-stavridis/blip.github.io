var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    // cellAlign: 'left',
    adaptiveHeight: true,
    contain: true,
    // freeScroll: true,
    wrapAround: true,
    fullscreen: true
});

Flickity.prototype._createResizeClass = function () {
    this.element.classList.add('flickity-resize');
};

Flickity.createMethods.push('_createResizeClass');

var resize = Flickity.prototype.resize;
Flickity.prototype.resize = function () {
    this.element.classList.remove('flickity-resize');
    resize.call(this);
    this.element.classList.add('flickity-resize');
};

const players = Plyr.setup('.js-player');