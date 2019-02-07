$('body').on('click', '.dropdown-icon', function (event) {
    event.preventDefault(); 
    $('.dropdown-toggle').dropdown();
});

