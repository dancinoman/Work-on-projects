<?php
include_once 'connect.php';

$conn = connect::connectTo();

$price = "";

if(isset($_POST['form_price']))
{

    $price = $_POST['iprice'];

    echo $price;

    $query = "INSERT INTO products (price) VALUES (:price)";

    $stmt = $conn->prepare($query);

    $stmt->bindParam(":price", $price);

    if(!$stmt->execute()) {return false;}

}
