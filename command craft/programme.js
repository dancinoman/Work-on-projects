function ObjectStr(objectId)
{
	switch(objectId){
		case 1: //intro
			this.trigger = str.affirmative_trigger;
		  this.valid = str.valid_intro;
		  this.unvalid = str.unvalid_intro;
			this.callback = begining;
			break;
		case 3://player naming
			this.trigger = str.affirmative_trigger;
			this.valid = str.valid_replyname_begining;
			this.unvalid = "";
			this.callback = begining;
			break;
		case 4: //player opinion
			this.postrigger = str.positive_trigger;
			this.negtrigger = str.negative_trigger;
			this.posreply = str.positive_reply;
			this.negreply = str.negative_reply;
			this.neureply = str.neutral_reply;
		default:
				console.log("no trigger valid");
			break;
		}
}

function lineStory(lineMessage, milliseconds, bool)
{
	//TODO erase this lines below when finished
	if(devmode){ milliseconds = 0; }
	else if(fastmode){ milliseconds = 1000; };

	var length = lineMessage.length - 1;

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


		cons.append("<span class='player-color'>" + gameStats.playerName + match.val() + "</span><br/>");

		if(lineEventEnd == 2)
		{
			lineStory(["Is that what you really want my lord?"], 500, true);
			gameStats.playerNameTemp = match.val();
			lineEventEnd ++;
		}
		else if (lineEventEnd == 3)
		{
			definePlayerName(match.val(), eventSet.trigger, eventSet.valid, eventSet.callback);
		}
		else if (lineEventEnd == 4)
		{
			storyEventOpinion(match.val(), eventSet.postrigger, eventSet.negtrigger, eventSet.posreply, eventSet.negreply, eventSet.neureply)
		}
		else
		{
			storyEvent(match.val(), eventSet.trigger,	eventSet.valid, eventSet.unvalid,	eventSet.callback);
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
			boolCommand(false);
			lineStory(validMsg, 1000, false);
			lineEventEnd ++;
			switchingScene();

			return false;
		} //if all trigger was not fired then check for another one
		else if(i >= length && (!val.match(match) || match.match(val))) {
			lineStory([unvalidMsg[randomIndex(unvalidMsg)]], 1000, true);
		}
	});
}

function storyEventOpinion(match, postrig, negtrig, posrep, negrep, neurep)
{
	var length = postrig.length -1;
	console.log(postrig);
	console.log(negtrig);

	//a test to match the player input for the behavior
	$.each(postrig, function(i, val){

	val = matchMaker(val);
	match = matchMaker(match);

		if(val.match(match) || match.match(val))
		{
			if(match.match("not") || match.match("no") || match.match("don't")){
				lineStory([negrep[randomIndex(negrep)]], 1000, true);
			}
			else {
				lineStory([posrep[randomIndex(posrep)]], 1000, true);
			}
			return false;
		}//then check in negative sentence
		else if(i >= length && (!val.match(match) || match.match(val))) {
			$.each(negtrig, function(i, val){
				if(val.match(match) || match.match(val)){
					if(match.match("not") || match.match("no")){
						lineStory([neurep[randomIndex(neurep)]], 1000, true);
					}
					else{
						lineStory([negrep[randomIndex(negrep)]], 1000, true);
					}
					return false;
				}
				else{
					lineStory([neurep[randomIndex(neurep)]], 1000, true);
					return false;
				}
			});
		}



	});


}

function definePlayerName(match, trigger, validMsg, switchingScene){

	var length = trigger.length -1;

	//a test to match the player input for the behavior
	$.each(trigger, function(i, val){

	val = matchMaker(val);
	match = matchMaker(match);

		if(val.match(match) || match.match(val))
		{
			cons.empty();
			//if matches the trigger then fire the event
			var arr = gameStats.playerNameTemp + validMsg[randomIndex(validMsg)];

			lineStory([arr], 1000, true);
			gameStats.playerName = gameStats.playerNameTemp + ": ";
			lineEventEnd ++;
			switchingScene();
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
