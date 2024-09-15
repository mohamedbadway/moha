// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
//  const dropdownBtn = document.querySelector(".drop_button");
//  const   dropdownMenu  = document.querySelector(".dropdown_menu");
//  dropdownBtn.addEventListener("click", () => {
//     dropdownMenu.classList.toggle("hide");  
//  } ) 




const drop = document.querySelector(".kkk") ;
const menu = document.querySelector(".menu") ;

drop.addEventListener("click", () => {
   menu.classList.toggle("lin");  
})
