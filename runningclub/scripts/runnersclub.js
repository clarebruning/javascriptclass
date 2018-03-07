$(".races").children().children().filter("ul").hide();

$(".races").children().children().filter("li").click(function() {
  
   $(".races").children().children().filter("ul").not(":hidden").slideToggle(); 
    $(this).next().not(":visible").slideToggle();
 
    


});