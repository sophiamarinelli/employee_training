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

       $(".blank5").mouseenter(function(){
        $(".blank5_options").addClass("show");
        console.log("1")
    });

    $(".op13").click(function(){
        var $chosenOption = $(".op13").html();
        $(".blank5").html($chosenOption);
        $(".blank5_options").removeClass("show");
        incorrect++;
    });

    $(".op14").click(function(){
        var $chosenOption = $(".op14").html();
        $(".blank5").html($chosenOption);
        $(".blank5_options").removeClass("show");
        incorrect++;
    });

    $(".op15").click(function(){
        var $chosenOption = $(".op15").html();
        $(".blank5").html($chosenOption);
        $(".blank5_options").removeClass("show");
        correct++;
    });

    $(".blank6").mouseenter(function(){
        $(".blank6_options").addClass("show");
        console.log("1")
    });

    $(".op16").click(function(){
        var $chosenOption = $(".op16").html();
        $(".blank6").html($chosenOption);
        $(".blank6_options").removeClass("show");
        incorrect++;
    });

    $(".op17").click(function(){
        var $chosenOption = $(".op17").html();
        $(".blank6").html($chosenOption);
        $(".blank6_options").removeClass("show");
        incorrect++;
    });

    $(".op18").click(function(){
        var $chosenOption = $(".op18").html();
        $(".blank6").html($chosenOption);
        $(".blank6_options").removeClass("show");
        correct++;
    });  

        $(".blank7").mouseenter(function(){
        $(".blank7_options").addClass("show");
        console.log("1")
    });

    $(".op19").click(function(){
        var $chosenOption = $(".op19").html();
        $(".blank7").html($chosenOption);
        $(".blank7_options").removeClass("show");
        incorrect++;
    });

    $(".op20").click(function(){
        var $chosenOption = $(".op20").html();
        $(".blank7").html($chosenOption);
        $(".blank7_options").removeClass("show");
        incorrect++;
    });

    $(".op21").click(function(){
        var $chosenOption = $(".op21").html();
        $(".blank7").html($chosenOption);
        $(".blank7_options").removeClass("show");
        correct++;
    });

        $(".blank8").mouseenter(function(){
        $(".blank8_options").addClass("show");
        console.log("1")
    });

    $(".op22").click(function(){
        var $chosenOption = $(".op22").html();
        $(".blank8").html($chosenOption);
        $(".blank8_options").removeClass("show");
        incorrect++;
    });

    $(".op23").click(function(){
        var $chosenOption = $(".op23").html();
        $(".blank8").html($chosenOption);
        $(".blank8_options").removeClass("show");
        incorrect++;
    });

    $(".op24").click(function(){
        var $chosenOption = $(".op24").html();
        $(".blank8").html($chosenOption);
        $(".blank8_options").removeClass("show");
        correct++;
    });

        $(".blank9").mouseenter(function(){
        $(".blank9_options").addClass("show");
        console.log("1")
    });

    $(".op25").click(function(){
        var $chosenOption = $(".op25").html();
        $(".blank9").html($chosenOption);
        $(".blank9_options").removeClass("show");
        incorrect++;
    });

    $(".op26").click(function(){
        var $chosenOption = $(".op26").html();
        $(".blank9").html($chosenOption);
        $(".blank9_options").removeClass("show");
        incorrect++;
    });

    $(".op27").click(function(){
        var $chosenOption = $(".op27").html();
        $(".blank9").html($chosenOption);
        $(".blank9_options").removeClass("show");
        correct++;
    });

        $(".blank10").mouseenter(function(){
        $(".blank10_options").addClass("show");
        console.log("1")
    });

    $(".op28").click(function(){
        var $chosenOption = $(".op28").html();
        $(".blank10").html($chosenOption);
        $(".blank10_options").removeClass("show");
        incorrect++;
    });

    $(".op29").click(function(){
        var $chosenOption = $(".op29").html();
        $(".blank10").html($chosenOption);
        $(".blank10_options").removeClass("show");
        incorrect++;
    });

    $(".op30").click(function(){
        var $chosenOption = $(".op30").html();
        $(".blank10").html($chosenOption);
        $(".blank10_options").removeClass("show");
        correct++;
    });

        $(".blank11").mouseenter(function(){
        $(".blank11_options").addClass("show");
        console.log("1")
    });

    $(".op31").click(function(){
        var $chosenOption = $(".op31").html();
        $(".blank11").html($chosenOption);
        $(".blank11_options").removeClass("show");
        incorrect++;
    });

    $(".op32").click(function(){
        var $chosenOption = $(".op32").html();
        $(".blank11").html($chosenOption);
        $(".blank11_options").removeClass("show");
        incorrect++;
    });

    $(".op33").click(function(){
        var $chosenOption = $(".op33").html();
        $(".blank11").html($chosenOption);
        $(".blank11_options").removeClass("show");
        correct++;
    });

        $(".blank12").mouseenter(function(){
        $(".blank12_options").addClass("show");
        console.log("1")
    });

    $(".op34").click(function(){
        var $chosenOption = $(".op34").html();
        $(".blank12").html($chosenOption);
        $(".blank12_options").removeClass("show");
        incorrect++;
    });

    $(".op35").click(function(){
        var $chosenOption = $(".op35").html();
        $(".blank12").html($chosenOption);
        $(".blank12_options").removeClass("show");
        incorrect++;
    });

    $(".op36").click(function(){
        var $chosenOption = $(".op36").html();
        $(".blank12").html($chosenOption);
        $(".blank12_options").removeClass("show");
        correct++;
    });

        $(".blank13").mouseenter(function(){
        $(".blank13_options").addClass("show");
        console.log("1")
    });

    $(".op37").click(function(){
        var $chosenOption = $(".op37").html();
        $(".blank13").html($chosenOption);
        $(".blank13_options").removeClass("show");
        incorrect++;
    });

    $(".op38").click(function(){
        var $chosenOption = $(".op38").html();
        $(".blank13").html($chosenOption);
        $(".blank13_options").removeClass("show");
        incorrect++;
    });

    $(".op39").click(function(){
        var $chosenOption = $(".op39").html();
        $(".blank13").html($chosenOption);
        $(".blank13_options").removeClass("show");
        correct++;
    });

        $(".blank14").mouseenter(function(){
        $(".blank14_options").addClass("show");
        console.log("1")
    });

    $(".op40").click(function(){
        var $chosenOption = $(".op40").html();
        $(".blank14").html($chosenOption);
        $(".blank14_options").removeClass("show");
        incorrect++;
    });

    $(".op41").click(function(){
        var $chosenOption = $(".op41").html();
        $(".blank14").html($chosenOption);
        $(".blank14_options").removeClass("show");
        incorrect++;
    });

    $(".op42").click(function(){
        var $chosenOption = $(".op42").html();
        $(".blank14").html($chosenOption);
        $(".blank14_options").removeClass("show");
        correct++;
    });

        $(".blank15").mouseenter(function(){
        $(".blank15_options").addClass("show");
        console.log("1")
    });

    $(".op43").click(function(){
        var $chosenOption = $(".op43").html();
        $(".blank15").html($chosenOption);
        $(".blank15_options").removeClass("show");
        incorrect++;
    });

    $(".op44").click(function(){
        var $chosenOption = $(".op44").html();
        $(".blank15").html($chosenOption);
        $(".blank15_options").removeClass("show");
        incorrect++;
    });

    $(".op45").click(function(){
        var $chosenOption = $(".op45").html();
        $(".blank15").html($chosenOption);
        $(".blank15_options").removeClass("show");
        correct++;
    });

        $(".blank16").mouseenter(function(){
        $(".blank16_options").addClass("show");
        console.log("1")
    });

    $(".op46").click(function(){
        var $chosenOption = $(".op46").html();
        $(".blank16").html($chosenOption);
        $(".blank16_options").removeClass("show");
        incorrect++;
    });

    $(".op47").click(function(){
        var $chosenOption = $(".op47").html();
        $(".blank16").html($chosenOption);
        $(".blank16_options").removeClass("show");
        incorrect++;
    });

    $(".op48").click(function(){
        var $chosenOption = $(".op48").html();
        $(".blank16").html($chosenOption);
        $(".blank16_options").removeClass("show");
        correct++;
    });

});