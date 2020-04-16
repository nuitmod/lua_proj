$(function(){




//page1
$('#i1').on('click', function(){
  $('#output').html("jq is on");
})

$('.mobile-tab').hide();
  $('#burg').on('click', function(){
    $('.mobile-tab').slideToggle(800)
  });

//page2


})

//index
var hamburgerButton = document.querySelector('.hamburger__button');
var mobileNav = document.querySelector('.mobile');

function openMobile() {
    mobileNav.classList.add('open');
}

function closeMobile() {
    mobileNav.classList.remove('open');
}

hamburgerButton.addEventListener('click', openMobile);
mobileNav.addEventListener('click', closeMobile);





// ServiceWorker Registration
if('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);

        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
