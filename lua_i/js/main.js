$(function(){

$('#i1').on('click', function(){
  $('#output').html("jq is on");
})

$('.mobile-tab').hide();
  $('#burg').on('click', function(){
    $('.mobile-tab').slideToggle(600)
  });

})
