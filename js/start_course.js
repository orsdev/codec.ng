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
  let closeIcon = $(".fa-plus");
  let sidebar_ul = $("#container");
  let sidebarBullet = $("#container li")
  let menuList = $(".menuList");
  let desktop_side = $(".desktop_side");
  let header = $(".sidebar header")
  let init1 = true;

  //button collapse events
  $(closeButton).click(() => {
    if (init1) {
      (sidebar_ul).css("width", "70%");
      menuList.css("display", "block");
      $(closeIcon).addClass("fa-times").removeClass("fa-plus");
      $(desktop_side).toggle();
      $(header).css("width", "70%")
      return init1 = false;
    }
    else {
      (sidebar_ul).css("width", "70px");
      menuList.css("display","none");
      $(closeIcon).addClass("fa-plus").removeClass("fa-times");
      desktop_side.toggle();
      $(header).css("width", "100px")

      return init1 = true;

    }

  })

  //menuList hover effect
  for (let i = 0; i < sidebarBullet.length; i++) {
    $(sidebarBullet[i]).mouseenter(() => {
        (sidebar_ul).css("width", "70%");
        $(menuList[i]).css("display", "block")
      
    })
    $(sidebarBullet[i]).mouseleave(() => {
        (sidebar_ul).css("width", "70px");
        $(menuList).css("display", "none")

    })

  }

  //accordion
  let angleIcon = $(".fa-angle-down");
  let accordion_head = $(".lead");
  let init = $(angleIcon).hasClass("fa-angle-down")
  for (let i = 0; i < accordion_head.length; i++) {
    $(accordion_head[i]).click(() => {
      $(accordion_head[i]).next().slideToggle(500);
      if (init == true) {
        $(angleIcon[i]).removeClass("fa-angle-down").addClass("fa-angle-up");
        init = false;
        return init;
      } else {
        $(angleIcon[i]).addClass("fa-angle-down").removeClass("fa-angle-up");
        init = true;
        return init;

      }

    })
  }

  // ends here
});