<?php 
	$dsn = "mysql:host=localhost; port=3306; dbname=dogeatveg; cahrest=utf8;";
    $user = "root";
    $password = "95123654";
    $options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
    $pdo = new PDO($dsn, $user, $password,$options);
?>