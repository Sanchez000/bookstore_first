/*
$('body').on('click', '.dropdown-toggle', function (event) {
    $('.dropdown-toggle').dropdown();
    event.preventDefault();
});
*/
$('.dropdown-toggle').dropdown();

$('.dropdown-menu').on('click', function(e){
  link = $(e.target).prop('href');
  selected_name = $(e.target).text();
  $('#dropdownMenuLink').text(selected_name);
  /*
  $.get( link, function() {
  console.log("success");
  })
  */
  //e.preventDefault();
});


$('.line-height-2').css('overflow', 'hidden');
$('.line-height-2').readmore({
embedCSS: false,
collapsedHeight: 200,
startOpen: false,
moreLink: '<a href="#" class="in-gold-500 ml-10">Read More</a>',
lessLink: '<a href="#" class="in-gold-500 ml-10">Read less</a>'
});
