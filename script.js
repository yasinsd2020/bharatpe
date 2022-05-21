let hamburger=document.querySelector('.hamburger');

// let menu =document.querySelector('.menu');

// let open=false;

// hamburger.addEventListener("click", function() {
//    if(!open){
//       alert('show');
//        open=true;
//    }else{
//     alert('hide');
//     open=false;
//    }
//   });

function myFunction() {
    var x = document.querySelector('.menu');
    var y=document.querySelector('.overlay');

     if (y.style.opacity === .0  || x.style.display === "none" ) {
      x.style.display = "fleX";
      y.style.opacity =.7;
      
    } else {
      x.style.display = "none";
      y.style.opacity =.0;
    }
  }