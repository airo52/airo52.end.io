<?php
$pass="tony";
$server="root";
$username="localhost";
$database="brand";
$con = mysqli_connect($username,$server,$pass)or die(mysqli_error());

mysqli_select_db($con,$database)or die(mysqli_error());

?>