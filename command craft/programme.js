var panel = $("#console");

message ("Welcome in the command block wither storm game. <br/>" +
							"Please enter a command to execute. <br/>" +
							"If you want to know more enter /help. <br/>");

function changeImage(image, imageDefaut, secondes)
{
	$("body").css("background-image", 'url('+ image +')');

	if(secondes != undefined)
	{
		setTimeout(function(){
		$("body").css("background-image", 'url('+ imageDefaut +')');
		}, secondes);
		}
	}

function message(message)
{
		panel.append("<span>"+ message +"</span><br/>");
}


$("#message").keypress(function(event){

	if(event.which == 13)
	{
		var commande = $("#message").val();
		var panel = $("#console");

		if(commande)
		{
			switch (commande)
			{
				case "/clear chat":

					$("#console").empty();

					break;

				case "/help":

					message("/summon 'monster' will appear the monster");

					break;

				case "/summon zombie":

					changeImage("zombie.jpg", "wither_command_block.jpg", 2000);

					message("")

					break;

				case "/summon wither storm":

						changeImage("wither_storm.jpg", "wither_command_block.jpg", 2000);

						message("Attention un wither storm! Es-tu fou? Je remets comme avant")

					break;

				case "/destroy command block":

					changeImage("wither.jpg", "wither_command_block.jpg", 2000);

					message("Attention un wither! Non! Il est mieux avec un bloc!");

					break;

				case "/enter wither storm":

					changeImage("wither_storm_command_block.jpg", "wither_command_block.jpg", 2000);

					message("Ça t'arrive souvent de rentre dans la tête des gens?");

					break;

				case "/time set night":

					changeImage("nuit.jpg", "wither_command_block.jpg");

					message("La nuit est tombé...");

					break;

				default:

					message("commande inconnu");

				}
		}

		$("#message").val('');
	}
});
