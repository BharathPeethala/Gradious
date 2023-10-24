<?php

function createDB()
{
    include './config/constants.php';
    $servername = $SERVER_NAME;
    $username = $USER_NAME;
    $password = $PASSWORD;
    $query = "SHOW DATABASES LIKE '" . $DATABASE_NAME . "'";
    
    $connection = new mysqli($servername, $username, $password);
    $query = mysqli_query($connection, $query);
    $result = mysqli_num_rows($query);

    if ($result <= 0) {
        mysqli_query($connection, "CREATE DATABASE IF NOT EXISTS " . $DATABASE_NAME . "");
        $connection = new mysqli($servername, $username, $password, $DATABASE_NAME);
        mysqli_query($connection, "CREATE TABLE employees (gender VARCHAR(10),email VARCHAR(50),id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(50),age INT,state INT);");
    } else {
    }
    $connection->close();
}
