<?php
		//introduction
		$msg_intro = array("This is not happening...","Should I really do this?...","Oh boy! here we go!", "Inside of this tower! I summon you FOR THE POWER!", "...", "Did it work? Hello can you hear me?");
		$trig_intro = array("yes", "yeah", "affirmative");
		$valid_intro = array("I guess its good, come closer.");
		$unvalid_intro = array("Once again, can you hear me?", "Yes, I can hear you, do you copy?", "Do you wear ear plugs? This is confusing, isn'it?");
		//begining
		$msg_begining = array("Greatings to you! Oh my new spirit!", "Indeed, you will live in head beside me...", "I have summoned you and with your power, ", "if you desire,", "we will rule over the world Master!", "But first, you need to grow up and practice a little.", "By the way, how should I call you?");
		$trig_begining = array("yes", "yeah", "affirmative", "y");
		$valid_replyname_begining = array(" is a beautiful name", " ? What the heck! Oh, my apologize my lord. My spirit is weak, don't punish me please!", " was the last thing I would think of such a spirit as you.");
		$story_lines = array("msg_intro" => $msg_intro, "trig_intro" => $trig_intro, "valid_intro" => $valid_intro, "unvalid_intro" => $unvalid_intro, "msg_begining" => $msg_begining, "trig_begining" => $trig_begining, "valid_replyname_begining" => $valid_replyname_begining);

		$json = json_encode($story_lines);

		echo $json;
