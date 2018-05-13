var button = document.getElementById("menu-button");
var calling = document.getElementById("calling");
var sideBarButton = document.getElementById("sidebar_button");

button.addEventListener('click', function(e){
   document.querySelector('.main-header').classList.toggle('main-header--shown');
   document.querySelector('.main-header').classList.toggle('main-header--hidden');
    calling.classList.toggle("call-us--acitve");

});

sideBarButton.addEventListener('click', function(e){
   document.querySelector('.sidebar__menu').classList.toggle('sidebar__menu--expanded');

});



function myFunction(x) {
    if (x.matches) { // If media query matches
        var slider = Peppermint(document.getElementById('peppermint'),{
    dots: true,
});
    } else {
        true;
    }
}

var x = window.matchMedia("(max-width: 768px)");
myFunction(x);
x.addListener(myFunction);