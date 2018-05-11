var button = document.getElementById("menu-button");
var calling = document.getElementById("calling");


button.addEventListener('click', function(e){
   document.querySelector('.main-header').classList.toggle('main-header--shown');
   document.querySelector('.main-header').classList.toggle('main-header--hidden');
    calling.classList.toggle("call-us--acitve");

});
