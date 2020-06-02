 $(".Turn_over").click(function() {
  var action = "active animate__animated animate__slideInDown"

   var icon_name = $(this).attr("id");
   if (icon_name === "h-top") {
     $(".top").addClass(action);
     $(".profile").removeClass(action);
     $(".skill").removeClass(action);
     $(".portfolio").removeClass(action);
     $(".contact").removeClass(action);
   }else if (icon_name === "h-profile") {
     $(".top").removeClass(action);
     $(".profile").addClass(action);
     $(".skill").removeClass(action);
     $(".portfolio").removeClass(action);
     $(".contact").removeClass(action);
   }else if (icon_name === "h-skill") {
     $(".top").removeClass(action);
     $(".profile").removeClass(action);
     $(".skill").addClass(action);
     $(".portfolio").removeClass(action);
     $(".contact").removeClass(action);
   }else if (icon_name === "h-portfolio") {
     $(".top").removeClass(action);
     $(".profile").removeClass(action);
     $(".skill").removeClass(action);
     $(".portfolio").addClass(action);
     $(".contact").removeClass(action);
   }else if (icon_name === "h-contact") {
     $(".top").removeClass(action);
     $(".profile").removeClass(action);
     $(".skill").removeClass(action);
     $(".portfolio").removeClass(action);
     $(".contact").addClass(action);
   }



 });
 