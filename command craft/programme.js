
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

function inputEvent(triggerIntro, validMsg, UnvalidMsg){

	$("#command").keypress(function(event){
		if(event.which == 13)
		{
			match = $("#command").val();
			cons.append("<span style='color: #fe6626'>" + match + "</span><br/>");
			if(match == "")
			{
				return false;
			}

			storyEvent(match, triggerIntro, validMsg, UnvalidMsg);

			$(this).val("");
		}
	});

}

function storyEvent(match, trigger,validMsg, UnvalidMsg)
{
	//a test to match the player input for the behavior
$.each(trigger, function(i, val){

	trigger = matchMaker(trigger);
	match = matchMaker(match);

	if(val.match(match) || match.match(val))
	{
		lineStory(validMsg, 1000);
		switchScene();
		lineEventEnd = true;

		return false;
	}
	else{

		linEventEnd = false;
			oneLine(UnvalidMsg[randomIndex(UnvalidMsg)], 1000);
			return false;
	}
});
}

function switchScene(){

	$("body").delay(1500).queue(function(){
		$(this).css("background-image", "url('css/begining')");
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
