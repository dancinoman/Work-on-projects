<?php

Class connect{
  private static $dbconn;
    static function connectTo(){
      $log = "root";
      $password = "";

      try{
          $dbconn = new PDO("mysql:host=localhost;dbname=mydb", $log, $password);
          $dbconn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      }
      catch(PDOException $e){

          echo "Unable to connect to db";

          exit();
      }
    }
    return connect::$dbconn;
}
