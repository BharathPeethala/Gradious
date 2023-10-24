<?php
$servername = "localhost";
$username = "bharath";
$password = "";
$dbname = "employees";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$FORM = [];
foreach ($_POST as $i) {
    array_push($FORM, $i);
}
$id = 0;
foreach (array_keys($_POST) as $key) {
    $id = explode("-", $key);
    $id = (int)($id[count($id) - 1]);
    // echo $id;
    break;
}

[$email, $name, $state, $gender, $age] = $FORM;
echo $gender;
echo $name;
echo $name, $email, $state, $gender, $age;
$stmt = $conn->prepare("UPDATE employees SET name = ?,email = ?,state =?,gender=?,age=? WHERE id =?");
$stmt->bind_param("ssisii", $name, $email, $state, $gender, $age, $id);

if ($stmt->execute() === TRUE) {
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
header("Location: http://localhost/employees-list");
exit();
