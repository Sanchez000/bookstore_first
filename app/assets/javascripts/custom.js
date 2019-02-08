$('body').on('click', '.dropdown-toggle', function (event) {
    $('.dropdown-toggle').dropdown();
    event.preventDefault(); 
});

$('body').on('click', '.line-height-2', function (event) {
    $('.line-height-2').readmore({
    collapsedHeight: 15,
    moreLink: '<a href="#" class="in-gold-500 ml-10">Read More</a>',
    lessLink: '<a href="#" class="in-gold-500 ml-10">Read less</a>'
    });
    event.preventDefault(); 
});