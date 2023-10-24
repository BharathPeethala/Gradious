<?php
include '../config/constants.php';
$servername = $SERVER_NAME;
$username = $USER_NAME;
$password = $PASSWORD;
$dbname = $DATABASE_NAME;
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$name = $_POST["name"];
$age = $_POST["age"];
$state = $_POST["state"];
$email = $_POST["email"];
$gender = $_POST['gender'];
// $sql = "INSERT INTO employees (gender,email,name, age, state) VALUES ('$gender','$email','$name', '$age', '$state')";
$stmt = $conn->prepare("INSERT INTO employees (gender,email,name, age, state) VALUES(?,?,?,?,?)");
$stmt->bind_param("sssii", $gender, $email, $name, $age, $state);

if ($stmt->execute() === TRUE) {
    $conn->close();
    header("Location: http://localhost/employees-list");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
