<!DOCTYPE html>
<html>
<head>
<style>

</style>
</head>
<body>

<h1>PHP coding</h1>
<?php
$servername = "localhost";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=myDb", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO MyGuests(firstname, lastname, email)
            VALUES ('John', 'Doe', 'john@example.com')";

    $conn->exec($sql);
    echo "Data was created successfully<br/>";

  } catch (PDOException $e) {
       echo $e->getMessage(). "<br/>";
       die();
     }

    $conn = null;
?>



</body>
</html>
