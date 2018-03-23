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
        incorrect++;
    });

    $(".op3").click(function(){
        var $chosenOption = $(".op3").html();
        $(".blank1").html($chosenOption);
        $(".blank1_options").removeClass("show");
        incorrect++;
    });

    $(".blank2").mouseenter(function(){
        $(".blank2_options").addClass("show");
        console.log("1")
    });

    $(".op4").click(function(){
        var $chosenOption = $(".op4").html();
        $(".blank2").html($chosenOption);
        $(".blank2_options").removeClass("show");
        incorrect++;
    });

    $(".op5").click(function(){
        var $chosenOption = $(".op5").html();
        $(".blank2").html($chosenOption);
        $(".blank2_options").removeClass("show");
        incorrect++;
    });

    $(".op6").click(function(){
        var $chosenOption = $(".op6").html();
        $(".blank2").html($chosenOption);
        $(".blank2_options").removeClass("show");
        correct++;
    });

    $(".blank3").mouseenter(function(){
        $(".blank3_options").addClass("show");
        console.log("1")
    });

    $(".op7").click(function(){
        var $chosenOption = $(".op7").html();
        $(".blank3").html($chosenOption);
        $(".blank3_options").removeClass("show");
        incorrect++;
    });

    $(".op8").click(function(){
        var $chosenOption = $(".op8").html();
        $(".blank3").html($chosenOption);
        $(".blank3_options").removeClass("show");
        incorrect++;
    });

    $(".op9").click(function(){
        var $chosenOption = $(".op9").html();
        $(".blank3").html($chosenOption);
        $(".blank3_options").removeClass("show");
        correct++;
    });

        $(".blank4").mouseenter(function(){
        $(".blank4_options").addClass("show");
        console.log("1")
    });

    $(".op10").click(function(){
        var $chosenOption = $(".op10").html();
        $(".blank4").html($chosenOption);
        $(".blank4_options").removeClass("show");
        incorrect++;
    });

    $(".op11").click(function(){
        var $chosenOption = $(".op11").html();
        $(".blank4").html($chosenOption);
        $(".blank4_options").removeClass("show");
        incorrect++;
    });

    $(".op12").click(function(){
        var $chosenOption = $(".op12").html();
        $(".blank4").html($chosenOption);
        $(".blank4_options").removeClass("show");
        correct++;
    });

});