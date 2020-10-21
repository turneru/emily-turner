
 $(document).ready(function() {
 
     $(window).on('hashchange', function() {
         
         if (window.location.hash == "#about") {
            $("#btn2").addClass("active_hover");
             $("#btn3, #btn4").removeClass("active_hover");
        } 
         
         else if (window.location.hash == "#projects") {
             $("#btn3").addClass("active_hover");
              $("#btn2, #btn4").removeClass("active_hover");
         }
             
         else if (window.location.hash == "#contact") {
             $("#btn4").addClass("active_hover");
              $("#btn3, #btn2").removeClass("active_hover");
         }
         
         else {
             $("#btn2, #btn3, #btn4").removeClass("active_hover");
         }
          })
     

//    $(".beer1").click( function () {
//         $(".beer_wrapper").hide( "slide", {direction: "left" }, 300, function() { 
//         $(".beer_nav").show( "slide", {direction: "up" }, 400 );
//             $(".beer1_bio").show( "slide", {direction: "right" }, 400 );
//         });
//    });
//   
//    $(".back").click( function () {
//         $(".beer1_bio, .beer2_bio, .beer3_bio, .beer4_bio, .beer5_bio, .beer6_bio").hide( "slide", {direction: "right" }, 300, function() { 
//         $(".beer_nav").hide( "slide", {direction: "up" }, 400 );
//         $(".beer_wrapper").delay(300).show( "slide", {direction: "left" }, 400);    
//         });
//    }); 
     
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 25) {
        $("header").addClass("slide-out-left").removeClass("slide-in-left");
        $(".side").show().addClass("slide-in-left-fast").removeClass("slide-out-left");
    } 
    
    else {
        $("header").addClass("slide-in-left").removeClass("slide-out-left");
        $(".side").hide().addClass("slide-out-left").removeClass("slide-in-left-fast"); 
    }
  
});
     
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    
    if (scroll >= 26 && scroll <= 999 ) {
        $("#btn1").addClass("active_hover");
             $("#btn2, #btn3, #btn4").removeClass("active_hover");
    } 

    else if (scroll >= 1000 && scroll <= 1700 ) {
        $("#btn2").addClass("active_hover");
         $("#btn1, #btn3, #btn4").removeClass("active_hover");
        $(".skill_left").addClass("slide-in-left");
        $(".skill_right").addClass("slide-in-right");
    } 
    
    else if (scroll >= 1701 && scroll <= 2600) {
         $("#btn3").addClass("active_hover");
              $("#btn1, #btn2, #btn4").removeClass("active_hover");
    } 
    
    else if (scroll >= 2601 && scroll <= 5000) {
         $("#btn4").addClass("active_hover");
              $("#btn1, #btn2, #btn3").removeClass("active_hover");
    } 
  
});  

});