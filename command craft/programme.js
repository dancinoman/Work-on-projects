
function lineStory(lineMessage, milliseconds, boolCommand)
{
	console.log("npc talking");
	if(devmode){ milliseconds = 0; }

	$.each(lineMessage, function(i, value){
		cons.delay(milliseconds)
				.queue(function(){
					$(this).append(value + "<br/>");
				})
				.dequeue()
				.queue(function(){
					commandAvailable = boolCommand;
					console.log("command ready is " + commandAvailable);
				})
				.dequeue();
	});


}

function oneLine(lineMessage, milliseconds){

	if(devmode){ milliseconds = 0; }

	cons.delay(milliseconds)
			.queue(function(){
				$(this).append(lineMessage + "<br/>").dequeue();
			});
}

function inputEvent(triggerIntro, validMsg, unvalidMsg){

	$("#command").keypress(function(event){

		if(event.which == 13 && commandAvailable == true)
		{

			cons.append("<span style='color: #fe6626'>" + match.val() + "</span><br/>");
			if(match == "")
			{
				return false;
			}
			//send user msg to triggering event
			storyEvent(match.val(), triggerIntro, validMsg, unvalidMsg);

			$(this).val("");

		} else if(event.which == 13 && commandAvailable == false){
			$(this).val("");
		}
	});

}

function storyEvent(match, trigger,validMsg, unvalidMsg)
{

	//a test to match the player input for the behavior
$.each(trigger, function(i, val){

	trigger = matchMaker(trigger);
	match = matchMaker(match);
	console.log(val);
	if(val.match(match) || match.match(val))
	{
		console.log("did match");
		lineStory(validMsg, 1000, false);
		switchScene();
		lineEventEnd = true;
		return false;
	}
	else{

		linEventEnd = false;
		oneLine(unvalidMsg[randomIndex(unvalidMsg)], 1000);
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

function boolCommand(bool){
	if(bool)
	 	{

		}
}
