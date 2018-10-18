


var main = function() {

	var addItem = function(defaultChoice){
		var newChoiceDiv = "<div class='choice'>" + defaultChoice + "</div>";
		$("#choiceDiv").append(newChoiceDiv);
		$('#inputbox').val('');

	}

	function sleep(miliseconds) {
   		var currentTime = new Date().getTime();

   		while (currentTime + miliseconds >= new Date().getTime()) {
   		}
	}

	var helper = function(){
		var newChoice =  $("#inputbox").val();
		if (newChoice) {
			addItem(newChoice);
		}
		else {
			alert("Please enter a new Choice.")
		}
	}

	var changeColor = function (cur){
		$(".choice").css("background-color", "#e8ecef");
		$(".choice:nth-child(" + cur + ")").css("background-color", "red");
	}

	var choose = function(){
		var choices = document.getElementsByClassName("choice");
		var len = choices.length;

		var i = 1;
		var counter = setInterval(function(){ 
			var cur = (Math.floor(Math.random() * len) + 1);
			changeColor(cur); 
			i++;
			if (i > 6){
				clearInterval(counter);
				$(".choice:nth-child(" + cur + ")").css("background-color", "green");
			}
		}, 1000);

	}

	var helper2 = function(){
		addItem("Weißbier");
	}

	$("#addBtn").click(helper);
	$("#wbBtn").click(helper2);

	$("#chooseBtn").click(choose).delay(1000);

	$("#inputbox").keypress(function(e) {
		var keycode = (e.keyCode || e.which);
		if(keycode == 13) {
	        helper();
	        return false;
	    }
	});
};

$(document).ready(main);

