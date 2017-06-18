<?php
//Custom error messages
function customError($errno, $errstr) {
  echo "<b>Error:</b> [$errno] $errstr";
}
set_error_handler("customError");

?>
