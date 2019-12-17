$(document).ready(function () {

  //sidebar 
  let closeButton = $(".close");
  let closeIcon = $(".plus");
  let sidebar_ul = $("#container");
  let sidebarBullet = $("#container li")
  let menuList = $(".menuList");
  let desktop_side = $(".desktop_side");
  let header = $(".sidebar header")
  let init1 = true;

  //button collapse events
  $(closeButton).click(() => {
    if (init1) {
      (sidebar_ul).css("width", "400px");
      menuList.css("display", "flex");
      $(desktop_side).toggle();
      $(header).css("width", "500px");
      $(closeIcon).css("transform", "rotate(130deg)")
      return init1 = false;
    }
    else {
      (sidebar_ul).css("width", "50px");
      menuList.css("display", "none");
      desktop_side.toggle();
      $(header).css("width", "150px");
      $(closeIcon).css("transform", "rotate(180deg)")
      return init1 = true;

    }

  })

  // menuList hover effect
  // for (let i = 0; i < sidebarBullet.length; i++) {
  //   $(sidebarBullet[i]).mouseenter(() => {
  //       (sidebar_ul).css("width", "400px");
  //       $(menuList[i]).css("display", "flex")

  //   })
  //   $(sidebarBullet[i]).mouseleave(() => {
  //       (sidebar_ul).css("width", "60px");
  //       $(menuList).css("display", "none")

  //   })

  // }

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