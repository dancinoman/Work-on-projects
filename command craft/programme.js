
function lineStory(lineMessage, milliseconds)
{
	if(devmode){
		milliseconds = 0;
	}
	$.each(lineMessage, function(i, value){
		cons.delay(milliseconds)
				.queue(function(){
					$(this).append(value + "<br/>").dequeue();
				});
	});
}

function oneLine(lineMessage, milliseconds){
	if(devmode){
		milliseconds = 0;
	}
	cons.delay(milliseconds)
			.queue(function(){
				$(this).append(lineMessage + "<br/>").dequeue();
			});
}

function inputEvent(triggerIntro){

	$("#command").keypress(function(event){
		if(event.which == 13)
		{
			match = $("#command").val();

			if(match == "")
			{
				return false;
			}

			storyEvent(match, triggerIntro);

			$(this).val("");
		}
	});

}

function storyEvent(match, trigger)
{
	//a test to match the player input for the behavior
$.each(trigger, function(i, val){

	trigger = matchMaker(trigger);
	match = matchMaker(match);

	if(val.match(match) || match.match(val))
	{
		lineStory(["I guess its good, come closer"], 1000);
		switchScene();
		lineEventEnd = true;

		return false;
	}
	else{
		reply = ["Don't make me repeat! Once again, can you hear me?",
							"Yes, I can hear you, do you copy?",
							"Do you wear ear plugs? This is confusing, isn'it?"];
		linEventEnd = false;
			oneLine(reply[randomIndex(reply)], 1000);
			return false;
	}
});
}

function switchScene(){

	$("body").delay(1500).queue(function(){
		$(this).css("background-image", "url('css/scene1')");
	});
}


//tools for develop
function matchMaker(tag)
{
  if(tag)
  {
		var tag = tag.toString();
    var tagNoSpace = tag.replace(/ +/g, "");
    var novaTag = tagNoSpace.toLowerCase();
    return novaTag;
  }
}

function randomIndex(arr)
{
	number = Math.floor(Math.random() * arr.length);
	return number;
}
