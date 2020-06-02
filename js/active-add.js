 $(".h").click(function() {

   var icon_name = $(this).attr("id");
   console.log(icon_name);
   if (icon_name === "h-top") {
     $(".h-1").addClass("active");
     $(".h-2").removeClass("active");
     $(".h-3").removeClass("active");
     $(".h-4").removeClass("active");
     $(".h-5").removeClass("active");
   }else if (icon_name === "h-profile") {
     $(".h-1").removeClass("active");
     $(".h-2").addClass("active");
     $(".h-3").removeClass("active");
     $(".h-4").removeClass("active");
     $(".h-5").removeClass("active");
   }else if (icon_name === "h-skill") {
     $(".h-1").removeClass("active");
     $(".h-2").removeClass("active");
     $(".h-3").addClass("active");
     $(".h-4").removeClass("active");
     $(".h-5").removeClass("active");
   }else if (icon_name === "h-portfolio") {
     $(".h-1").removeClass("active");
     $(".h-2").removeClass("active");
     $(".h-3").removeClass("active");
     $(".h-4").addClass("active");
     $(".h-5").removeClass("active");
   }else if (icon_name === "h-contact") {
     $(".h-1").removeClass("active");
     $(".h-2").removeClass("active");
     $(".h-3").removeClass("active");
     $(".h-4").removeClass("active");
     $(".h-5").addClass("active");
   }



 });
 