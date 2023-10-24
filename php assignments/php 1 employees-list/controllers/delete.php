<?php
$id = $_GET['id'];
echo $id;
$servername = "localhost";
$username = "bharath";
$password = "";
$dbname = "employees";
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
