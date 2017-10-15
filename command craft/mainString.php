<?php
		//introduction
		$msg_intro = array("This is not happening...","Should I really do this?...","Oh boy! here we go!", "Inside of this tower! I summon you FOR THE POWER!", "...", "Did it work? Hello can you hear me?");
		$affirmative_trigger = array("yes", "yeah", "affirmative");
		$valid_intro = array("I guess its good, come closer.");
		$unvalid_intro = array("Once again, can you hear me?", "Yes, I can hear you, do you copy?", "Do you wear ear plugs? This is confusing, isn'it?");
		//begining
		$msg_begining1 = array("Greatings to you! Oh my new spirit!", "You are inside of my mind and you will make one with me.", "I have summoned you because you got a great power. ", "If you desire, my lord", "we will rule over the world and spread blessedness or gloominess.", "You decide which one will suit you as well.", "Oh my divinity, some of your actions will affect the world. With good or bad.", "ying or yang, black or white...", "well you get the idea." ,"Whatever you will do master, I will learn to be like you.", " But first introducing our self. Shall we?", "How should I call you?");
		$valid_replyname_begining = array(" is a beautiful name", "? What the heck! Oh, my apologize my lord. My spirit is weak, don't punish me please!", " was the last thing I would think of such a spirit as you.");
		$msg_begining2 = array("My name is Kazak", "What do you think about my name?");
		$positive_trigger = array("like", "love", "good", "beautiful", "awesome", "superb", "amazing", "fine", "gorgeous", "wonderful", "charming", "delightful", "elegant", "marvelous", "great", "excellent");
		$negative_trigger = array("ugly","disgusting", "bad", "atrocious", "awful", "dreadful", "sad", "abominable", "creepy", "horrific", "nasty", "odious", "repugnant");

		$positive_reply = array("Thank you my lord, that's very kind of you", "Awww! I fell.. like... Wow! It warms my heart!", "Thanks a lot!");
		$negative_reply = array("I thought it was the most beautiful name in the world.", "My mother woulbe sad to know it", "Geez! That hurts me!");
		$neutral_reply = array("Actually, I should not bother you with that", "Yeah... don't mind either", "Neither bad nor good, I got that");

		$story_lines = array(
													"msg_intro" => $msg_intro,
													"affirmative_trigger" => $affirmative_trigger,
													"valid_intro" => $valid_intro,
													"unvalid_intro" => $unvalid_intro,
													"msg_begining1" => $msg_begining1,
													"valid_replyname_begining" => $valid_replyname_begining,
													"msg_begining2"=> $msg_begining2,
													"positive_trigger" => $positive_trigger,
													"negative_trigger" => $negative_trigger,
													"positive_reply" => $positive_reply,
													"negative_reply" => $negative_reply,
													"neutral_reply" => $neutral_reply
												);

		$json = json_encode($story_lines);

		echo $json;
