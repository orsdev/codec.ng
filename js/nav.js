
$(document).ready(function () {

 //Dropdown Toggle
 $(".toggle-1").click(function () {

  //show and hide elements
  $('.dropdown-1').toggle();
  $('.dropdown-2').hide();
  $('.dropdown-3').hide();

  $(this).find('.fa-angle-down').toggle();
  $(this).find('.fa-angle-up').toggle();

  $('.toggle-2').find('.fa-angle-down').show();
  $('.toggle-2').find('.fa-angle-up').hide();
  $('.toggle-3').find('.fa-angle-down').show();
  $('.toggle-3').find('.fa-angle-up').hide();

 });

 //Dropdown Toggle
 $(".toggle-2").click(function () {
  //show and hide elements
  $('.dropdown-2').toggle();
  $('.dropdown-1').hide();
  $('.dropdown-3').hide();

  $(this).find('.fa-angle-down').toggle();
  $(this).find('.fa-angle-up').toggle();

  $('.toggle-1').find('.fa-angle-down').show();
  $('.toggle-1').find('.fa-angle-up').hide();
  $('.toggle-3').find('.fa-angle-down').show();
  $('.toggle-3').find('.fa-angle-up').hide();

 })

 //Dropdown Toggle
 $(".toggle-3").click(function () {
  //show and hide elements
  $('.dropdown-3').toggle();
  $('.dropdown-1').hide();
  $('.dropdown-2').hide();

  $(this).find('.fa-angle-down').toggle();
  $(this).find('.fa-angle-up').toggle();

  $('.toggle-1').find('.fa-angle-down').show();
  $('.toggle-1').find('.fa-angle-up').hide();
  $('.toggle-2').find('.fa-angle-down').show();
  $('.toggle-2').find('.fa-angle-up').hide();

 })

 //toggle language selection
 $('.auth .language__select').click(function () {
  //show and hide element
  $('.language__globe').toggle();
 })

 //User dropdown menu
 $("#user_image").click(() => {
  $(".user_menu").slideToggle(500);
  $("#user .fa-caret-up").slideToggle(200);
 })

});
