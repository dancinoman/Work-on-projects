function ObjectStr(objectId)
{
	if(objectId == 1)
	{
		this.trigger = str.trig_intro;
		this.valid = str.valid_intro;
		this.unvalid = str.unvalid_intro;
	}
	if(objectId == 3)
	{
		this.trigger = str.trig_begining;
		this.valid = str.valid_replyname_begining;
		this.unvalid = "";
	}

}

function lineStory(lineMessage, milliseconds, bool)
{
	var length = lineMessage.length - 1;
	//TODO erase this lines below when finished
	if(devmode){ milliseconds = 0; }
	else if(fastmode){ milliseconds = 1000; };


	$.each(lineMessage, function(i, value){
		cons.delay(milliseconds)
				.queue(function(){
				$(this).append(value + "<br/>")
				.dequeue();
					if(i  >= length){
						boolCommand(bool);
					}
			})
		})
}

$("#command").keypress(function(event){

	if(event.which == 13 && commandAvailable == true)
	{
		eventSet = new ObjectStr(lineEventEnd);

		if(match.val() == "")
		{
			return false;
		}


		cons.append("<span class='player-color'>" + match.val() + "</span><br/>");

		if(lineEventEnd == 2)
		{
			lineStory(["Is that what you really want my lord?"], 500, true);
			playerName = match.val();
			lineEventEnd ++;
		}
		else if (lineEventEnd == 3)
		{
			definePlayerName(match.val(), eventSet.trigger, eventSet.valid);
		}
		else
		{
			storyEvent(match.val(), eventSet.trigger,	eventSet.valid, eventSet.unvalid,	begining);
		}

		//reset the val input
		$(this).val("");

	} else if(event.which == 13 && commandAvailable == false){
		//reset the val input
		$(this).val("");
	}
});


function storyEvent(match, trigger, validMsg, unvalidMsg, switchingScene)
{

	var length = trigger.length -1;

	//a test to match the player input for the behavior
	$.each(trigger, function(i, val){

	val = matchMaker(val);
	match = matchMaker(match);

		if(val.match(match) || match.match(val))
		{
			//if matches the trigger then fire the event
			cons.empty();
			lineEventEnd ++;
			boolCommand(false);
			lineStory(validMsg, 1000, false);
			switchingScene();
			return false;
		}
		else if(i >= length && (!val.match(match) || match.match(val))) {
			lineStory([unvalidMsg[randomIndex(unvalidMsg)]], 1000, true);
		}
	});
}

function definePlayerName(match, trigger, validMsg){

	var length = trigger.length -1;

	//a test to match the player input for the behavior
	$.each(trigger, function(i, val){

	val = matchMaker(val);
	match = matchMaker(match);

		if(val.match(match) || match.match(val))
		{

			//if matches the trigger then fire the event
			var arr = playerName + validMsg[randomIndex(validMsg)];

			lineStory([arr], 1000, true);
			lineEventEnd ++;
			return false;
		}
		else if(i >= length && (!val.match(match) || match.match(val))) {

			lineStory(["Then what we shall call you?"], 500, true);
			lineEventEnd --;

		}
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
	if(bool === true){
			//set the input available
			commandAvailable = true;
			$("#command").removeClass("command-inactive");
			$("#command").addClass("command-active");
		}
		else{
			commandAvailable = false;
			$("#command").removeClass("command-active");
			$("#command").addClass("command-inactive");
		}
}
