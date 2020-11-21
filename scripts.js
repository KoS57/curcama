// $(document).ready(function(){
//     $('.header__burger').click(function(event){
//         $('.header__burger, .header__menu').toggleClass('active')
//     })
// })

// document.querySelectorAll('.header__burger').forEach(header__burger=>
//     header__burger.addEventListener('click', function() {
//       this.classList.toggle('active');
//     }))

//     document.querySelectorAll('.header__menu').forEach(header__menu=>
//       header__menu.addEventListener('click', function() {
//         this.classList.toggle('active');
//       }))

// document.querySelectorAll('.header__burger')
//   .onclick = function() {
//   if (this.classList.contains('checked')) {
//   this.classList.remove('checked')
//   } else {this.classList.add('checked')}
// }
//////////////////////////////////////////////////////////
function toggleColor() {
  var myButtonClasses = document.querySelectorAll('.header__burger').classList;

  if (myButtonClasses.contains("blue")) {
    myButtonClasses.remove("blue");
  } else {
    myButtonClasses.add("blue");
  }
  if (myButtonClasses.contains("red")) {
    myButtonClasses.remove("red");
  } else {
    myButtonClasses.add("red");
  }
}



