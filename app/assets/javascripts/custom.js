$('body').on('click', '.dropdown-toggle', function (event) {
    $('.dropdown-toggle').dropdown();
    event.preventDefault(); 
});

$('body').on('click', '.line-height-2', function (event) {
    $('.line-height-2').readmore({
    collapsedHeight: 15,
    moreLink: '<a href="#">Read more</a>',
    lessLink: '<a href="#">Read less</a>'
    });
    event.preventDefault(); 
});