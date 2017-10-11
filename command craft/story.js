//setting ajax


$.ajax({
		url: 'mainString.php',
		dataType: 'JSON',
		success: function(str){
			console.log("lets play!");
			main(str);
		}
})

//setting devmode
devmode = false;

//declaring variables
var cons = $("#console");
var h1 = $("h1");
var lineEventEnd = false;

//main game
function main(str){
	introduction(str);
}




function introduction(str)
{

	//smooth title generic
	h1.fadeIn(5000, function(){
		$(this).delay(2000).fadeOut(5000);
	});


	if(lineEventEnd)
	{
		str.trig_intro = [];
	}

  lineStory(str.msg_intro, 3000);
	inputEvent(str.trig_intro, str.valid_intro, str.unvalid_intro);

}
