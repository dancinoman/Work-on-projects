<?php
//Adds custom errors messages
include("PhpCustomErr.php");

$target_dir = "uploads/";
$target_file = $target_dir. basename($_FILES["fileToUpload"]["name"]);
$uploadOK = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

   //check if image file is actual image or fake image

if(isset($_POST["submit"])) {
     $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
      if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOK = 1;
      } else {
           echo "File is not an image";
           $uploadOK = 0;
      }

      if (file_exists($target_file)) {
        echo "Sorry, file already exists.";
        $uploadOK = 0;
      }

      if($_FILES["fileToUpload"]["size"] > 500000) {
        echo "Sorry, your file is too large.";
        $uploadOK = 0;
      }

      if($imageFileType != "jpg" && $imageFileType !="png" && $imageFileType !="jpeg"
      && $imageFileType != "gif") {
        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOK = 0;
      }

      //Check if $uploadOK is set to 0 by an error
      if ($uploadOK == 0) {
        echo "Sorry, your file was not uploaded.";
      } else {
        if(move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
          echo "The file" . basename($_FILES["fileToUpload"]["name"]) . "has been dowloaded";
      }
      else {
        echo "Sorry, there was an error uploading file.";
      }
    }
}


 ?>
