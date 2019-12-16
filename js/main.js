$(document).ready(function () {

  //mobile navBar toggle
  $("#hamb").click(function () {
    let sidebar = $("#mobile");
    $(sidebar).toggleClass("show_sidebar");
    let sidebard = $(sidebar).css("left");
    if (sidebard === "-500px") {
      $(this).removeClass("fa-bars").addClass("fa-times")
    } else {
      $(this).removeClass("fa-times").addClass("fa-bars")
    }
  })

  //mobile search function
  $("#fsearch").click(function () {
    $(".search").toggle(500)
  })

  // header courses 

  let courses = $(".desktop ul li");
  let courses_items = $(".navMenu div")
  for (let i = 0; i < courses.length; i++) {
    $(courses[i]).click(function () {
      if ($(courses_items[i]).css("display") === "none") {
        $(courses_items).css("display", "none");
        $(courses_items[i]).css("display", "flex");

      }
      else {
        $(courses_items[i]).css("display", "none")
      }
    })
  }

//sidebar 
let closeButton = $(".close");
let sidebar = $(".sidebar");
let header = $(".sidebar header");
let closeIcon = $(".fa-plus");
let sidebarTitle = $(".sidebar header h5");
$(closeButton).click(()=>{

 let left = parseInt($(sidebar).css("left"));
 let width = parseInt($(header).css("width"));

 (left < 0) ? $(sidebar).css("left",0): $(sidebar).css("left","-750px");

 if(width <=100){
   $(header).css({"width":"100%", "left":"0"});

 }else{
   $(header).css({"width":"100px", "left":"750px"});
 } 

 (width <= 100 ) ? $(closeIcon).removeClass("fa-plus").addClass("fa-times") : $(closeIcon).removeClass("fa-times").addClass("fa-plus");
  $(sidebarTitle).slideToggle(700);

})
  // ends here
});