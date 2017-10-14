
//setting devmode
devmode = true;
//fastmode words only if devmode is false
fastmode = true;

console.log("devmode is : " + devmode);
console.log("devmode is : " + fastmode);
//set inputAvailable
commandAvailable = false;

playerName = "";
//defining command input
match = $("#command");
//put str to global scope
var str;
//declaring variables
var cons = $("#console");
var h1 = $("h1");
// resets the triggers if some event occurs
lineEventEnd = 1;


//setting ajax
$.ajax({
		url: 'mainString.php',
		dataType: 'JSON',
		success: function(data){
			console.log("lets play!");
			str = data;
			introduction();
		}
})

//main game
 //introduction
 //begining

function introduction()
{
	if(lineEventEnd == 1){
		//smooth title generic
		h1.fadeIn(5000, function(){
			$(this).delay(2000).fadeOut(5000);
		});

		lineStory(str.msg_intro, 3000, true);
	}
}

function begining(){

	if(lineEventEnd == 2){
		str.trig_intro = str.valid_intro = str.unvalid_intro = [];
			$("body").delay(1500).queue(function(){
			$(this).css("background-image", "url('css/begining')");
		});

		lineStory(str.msg_begining, 2000, true);

	}

}
