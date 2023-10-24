<?php
$id = $_GET['id'];
include '../config/constants.php';
$servername = $SERVER_NAME;
$username = $USER_NAME;
$password = $PASSWORD;
$dbname = $DATABASE_NAME;
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "DELETE FROM employees WHERE id=" . (int)$id . "";
if ($conn->query($sql) === TRUE) {
    header("Location: http://localhost/employees-list");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
