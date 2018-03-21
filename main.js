// A $( document ).ready() block.
$( document ).ready(function() {

	var correct = 0;
	var incorrect = 0;

    $(".blank1").mouseenter( function(){
    	$(".optionbox").addClass("show");
    });

    $(".blank1_options").click(function(){
    	var $chosenOption = $(".optionbox").html();
    	$(".blank1").html($chosenOption);
    	$(".optionbox").removeClass("show");
    	correct++;
    });

    $(".blank1").mouseenter( function(){
        $(".blank1_options").addClass("show");
    });

    $(".blank1_options").click(function(){
        var $chosenOption = $(".blank1_options").html();
        $(".blank1").html($chosenOption);
        $(".blank1_options").removeClass("show");
        correct++;
    });

    $(".submit-button").click(function(){
    	$(".correct-count").html(correct);
    	$(".incorrect-count").html(incorrect);
    });

});