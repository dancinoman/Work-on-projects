<?php


//connexion for database
class Connexion{

	public static function dbConnect()
	{
		try {
   	    $username = "root";
   	    $password = "";

   	    $conn = new PDO('mysql:host=localhost;dbname=mydb', $username, $password);
   	    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


   	  		} catch (PDOException $e) {
   	    	echo $e->getMessage() . "<br/>";
   	    	die();

		}

		return $conn;
	}
}
