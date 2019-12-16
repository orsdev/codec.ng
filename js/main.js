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

  // Courses Effect
  let browserWidth = document.documentElement.clientWidth;
  console.log(browserWidth)
  let course_container = $(".course_container");
  let course_item = $(".hover");

  for (let i = 0; i < course_container.length; i++) {
    if (browserWidth <= 560) {

    } else {


      $(course_container[i]).mouseenter(() => {
        $(course_item[i]).fadeIn(500)
      }).mouseleave(() => {
        $(course_item[i]).fadeOut()
      })
    }
  }
  // ends here
});