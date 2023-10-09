$(document).ready(function(){
    console.log("ready");


    function changeParagraph(){
        $(".footnote").css("font-size", "10px");
        $("#minimize").css("font-size", "7px");
        $("minimize").on("click", changeParagraph)

    }
    
});