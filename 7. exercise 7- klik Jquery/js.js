$('.larger').click(function () { //wyszukanie elementu w html i nasluchiwanie na click i wykona sie funkcja


    $('h1').toggleClass('duzy'); //metoda dodająca i zabierająca klasę

})

$('.smaller').click(function () {

    $('h1').toggleClass('mniejszy');
})

$('.border').click(function () {

    $('h1').toggleClass('obramowanie');
})
