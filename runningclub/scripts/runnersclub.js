$(".races").hide();
$(document).ready(function() {
    

    $("#first").click(function() {
        $("#5k").toggle();
        $("#half").slideUp();
        $("#full").fadeOut();
    });//end first section

    $("#second").click(function() {
        $("#half").slideToggle();
        $("#5k").hide();
        $("#full").fadeOut();
    });//end second section

    $("#third").click(function() {
        $("#full").fadeToggle();
        $("#5k").hide();
        $("#half").slideUp();
    });//end third section
    
    
});