$('body').on('click', '.dropdown-toggle', function (event) {
    //$('.dropdown-toggle').dropdown();
    $this.dropdown();
    event.preventDefault(); 
});

