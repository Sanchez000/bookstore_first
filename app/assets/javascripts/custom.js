$('body').on('click', '.dropdown-toggle', function (event) {
    event.preventDefault(); 
    $('.dropdown-toggle').dropdown();
});

