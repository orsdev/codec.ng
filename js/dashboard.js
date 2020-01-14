
// SIDEBAR TOGGLE
function openNav(){
 document.querySelector(".mobile__sidebar-bg").style.width = "295px";
 document.querySelector(".mobile__sidebar").style.width = "100%";
 document.querySelector(".mobile__sidebar-bg").style.transform = "translate(0)";
}

function closeNav(e){
 if(e.target.classList.contains('mobile__sidebar')) {
 document.querySelector(".mobile__sidebar-bg").style.width = "0";
 document.querySelector(".mobile__sidebar").style.width = "0";
 document.querySelector(".mobile__sidebar-bg").style.transform = "translate(-500px)";
 }
}

 /********************************************************************* */

 // SHOW ACTIVE PAGE
 function showPages(e) {

  let target = e.target;

  //select dom elements
  let courses = document.querySelector('.courses');
  let activeClass = document.querySelectorAll('.active-list');
  let communication = document.querySelector('.communication');

    //loop & remove classes
    activeClass.forEach((elem) => {
     elem.classList.remove('active-list');
    });

    if(target.classList.contains('show-courses')) {
     //select dom element
     let coursesActive = document.querySelector('.courses-active');
  
     //add class to element
     coursesActive.classList.add('active-list');
  
     courses.style.display = "block";
     communication.style.display = "none";
    }

  if(target.classList.contains('show-comms')) {
   //select dom element
   let showActive = document.querySelector('.comms-active');

   //add class to element
   showActive.classList.add('active-list');

   courses.style.display = "none";
   communication.style.display = "flex";
  }

 }

//events
function eventListener() {
 const open = document.querySelector('.mobile-nav__toggle');
 const close =  document.querySelector(".mobile__sidebar");
 let wrapper = document.querySelector('.wrapper');

 open.addEventListener('click' , openNav);
 close.addEventListener('click' , closeNav);
 wrapper.addEventListener('click', showPages);

}

//execute function
eventListener();
