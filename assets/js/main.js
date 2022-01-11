//fixed navbar 
// const navbar = document.querySelector(".navbar");
// console.log("navbar:",navbar)
// window.onscroll = ()=>{
//   this.scrollY > 250 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
// }

// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  });

// console.log("scroll", window.scrollY);

$(document).ready(function () {
  $("li.dropdown").click(function () {
    console.log("hello");
      //Toggle the child but don't include them in the hide selector using .not()
      $('li.dropdown > .dropdown-menu').not($(this).children(".dropdown-menu").toggle()).hide();

  });

});

// $('li.dropdown').click(function(){
//     $(this).children('.dropdown-menu').toggle();
// });

