<!DOCTYPE html>
<html>
<head>
<style>

</style>
</head>
<body>

<h1>My first PHP page</h1>


<form method="post" action= "<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname"/></br>
  Sexe:
  <input  type="radio" name="gender" value="female">Female<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input  type="radio" name="gender" value="male">Male </br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="gender" value="unknown">Unknown</p>
  Wich  you wish the most?
          <select name = "product">
            <option value="nothing"></option>
            <option value="motocycle">Motocycle</option>
            <option value="bicycle">Bicycle</option>
            <option  value="noAnswer">None of your business!</option>
          </select></p>
        <input type="submit">

</form>

<?php
 $name = $gender = $prod = "";

 if($_SERVER["REQUEST_METHOD"] == "POST") {

   function validate_input($data){
       $data = trim($data);
       $data = stripslashes($data);
       $data = htmlspecialchars($data);
       return $data;
      }

   if(empty($_POST['fname']) || empty($_POST['gender'])){
     echo "Please enter all the informations";
     return;
   }
   else {
     $name = validate_input($_POST['fname']);
     $gender = validate_input($_POST['gender']);
     $prod = $_POST['product'];
     if ($prod == "nothing"){
       echo "Please enter all the informations";

     } elseif($prod == "noAnswer") {
       echo "First name is $name</br> and your gender is $gender. You also wish to us to mind of our business.";
     }
     else{
       echo "First name is $name</br> and your gender is $gender. You also want a $prod.";
     }
   }
}
?>

</body>
</html>
