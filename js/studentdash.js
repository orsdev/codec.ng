
$(document).ready(function () {


 // SIDE BAR TOGGLE
 $('.side-bar').on('click', 'span', 'i', function (e) {
  let target = e.target;

  if (target.classList.contains('left')) {

   $('.dashboard__user').toggleClass('hidden');
   $('.toggle__sidebar').toggleClass('toggle__right');


   $('.left').hide();
   $('.right').show();
   $('.toggle__sidebar').show();
  }


  if (target.classList.contains('right')) {
   $('.dashboard__user').toggleClass('hidden');
   $('.toggle__sidebar').toggleClass('toggle__right');

   $('.right').hide();
   $('.left').show();
   $('.toggle__sidebar').show();
  }

 });

 // Toggle Dashboard
 $('.dashboard__user-tabs').on('click', 'span', 'a', function (e) {
  let target = e.target;

  if (target.classList.contains('prof')) {

   $('.dashboard__widget').css('display', 'none');
   $('.profile__widget').css('display', 'block');
   $('.profile').addClass('active-blue');
   $('.dash').removeClass('active-blue');
  }

  if (target.classList.contains('dassh')) {
   $('.dashboard__widget').css('display', 'grid');
   $('.profile__widget').css('display', 'none');
   $('.dash').addClass('active-blue');
   $('.profile').removeClass('active-blue');
  }
 })

});