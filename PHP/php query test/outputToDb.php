<?php
include_once 'connect.php';

$conn = connect::connectTo()

$price = "";

if(isset($_POST['form_price']))
{
    $price = $_POST['iprice'];

    echo $price;

    $zut = "";

    $query = "INSERT INTO products (price) VALUES ($zut)";

    $stmt = $conn->prepare($query);

    $stmt->bindParam($zut, $price);

    $stmt->execute();

}
