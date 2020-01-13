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

//events
function eventListener() {
 const open = document.querySelector('.mobile-nav__toggle');
 const close =  document.querySelector(".mobile__sidebar");


 open.addEventListener('click' , openNav);
 close.addEventListener('click' , closeNav);

}

//execute function
eventListener();
