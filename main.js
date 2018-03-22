// A $( document ).ready() block.
$( document ).ready(function() {

	var correct = 0;
	var incorrect = 0;

    $(".blank1").mouseenter(function(){
    	$(".blank1_options").addClass(".show");
        console.log("1")
    });

    $(".blank1_options").click(function(){
    	var $chosenOption = $(".op1").html();
    	$(".blank1").html($chosenOption);
    	$(".optionbox").removeClass(".show");
    	correct++;
    });

    $(".blank1_options").click(function(){
        var $chosenOption2 = $(".op2").html();
        $(".blank1").html($chosenOption2);
        $(".optionbox").removeClass(".show");
        correct++;
    });

    $(".blank1").mouseenter( function(){
        $(".blank1_options").addClass(".show");
    });

    $(".op1").click(function(){
        var $chosenOption = $(".op1").html();
        $(".blank1").html($chosenOption);
        $(".blank1_options").removeClass(".show");
        correct++;
    });

    $(".submit-button").click(function(){
    	$(".correct-count").html(correct);
    	$(".incorrect-count").html(incorrect);
    });

});