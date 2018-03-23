// A $( document ).ready() block.
$( document ).ready(function() {

	var correct = 0;
	var incorrect = 0;

    $(".blank1").mouseenter(function(){
    	$(".blank1_options").addClass("show");
        console.log("1")
    });

    $(".op1").click(function(){
        var $chosenOption = $(".op1").html();
        $(".blank1").html($chosenOption);
        $(".blank1_options").removeClass("show");
        correct++;
    });

    $(".op2").click(function(){
        var $chosenOption = $(".op2").html();
        $(".blank1").html($chosenOption);
        $(".blank1_options").removeClass("show");
        correct++;
    });

    $(".op3").click(function(){
        var $chosenOption = $(".op3").html();
        $(".blank1").html($chosenOption);
        $(".blank1_options").removeClass("show");
        correct++;
    });

});