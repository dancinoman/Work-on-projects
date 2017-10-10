//setting devmode
devmode = false;

//declaring variables
var cons = $("#console");
var h1 = $("h1");
var lineEventEnd = false;
//main game
introduction();
scene1();


function introduction()
{

	//smooth title generic
	h1.fadeIn(5000, function(){
		$(this).delay(2000).fadeOut(5000);
	});

	var Msgintro = [
				"This is not happening...",
				"Godamn! Why am I doing this...",
				"Hello! Can you hear me?"];

	var triggerIntro = ["yes", "yeah", "affirmative"];

	if(lineEventEnd)
	{
		triggerIntro = [];
	}
  lineStory(Msgintro, 3000);
	inputEvent(triggerIntro);

}

function scene1()
{

}
