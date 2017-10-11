<?php

		$msg_intro = array("This is not happening...","Should I really do this?...","Oh boy, here we go!", "Inside of this tower! I summon you FOR THE POWER!", "...", "Did it worked? Hello can you hear me?");
		$trig_intro = array("yes", "yeah", "affirmative");
		$valid_intro = array("I guess its good, come closer");
		$unvalid_intro = array("Don't make me repeat! Once again, can you hear me?", "Yes, I can hear you, do you copy?", "Do you wear ear plugs? This is confusing, isn'it?");




		$story_lines = array("msg_intro" => $msg_intro, "trig_intro" => $trig_intro, "valid_intro" => $valid_intro, "unvalid_intro" => $unvalid_intro);

		$json = json_encode($story_lines);

		echo $json;
