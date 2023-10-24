<?php
include './controllers/createDatabase.php';
// change details in constants in config file to create a database;
createDB(); ?>
<?php include 'includes\header.php'; ?>
<?php include 'add-employees.php' ?>
<form method='post' action="/employees-list/controllers/update.php">
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="th">Email</th>
                <th scope="col" class="th">Name</th>
                <th scope="col" class="th">State</th>
                <th scope="col" class="th">Gender</th>
                <th scope="col" class="th">Age</th>
                <th scope="col" class="th" style="text-align:center;">Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php
            function view()
            {
                require 'config/constants.php';
                $servername = $SERVER_NAME;
                $username = $USER_NAME;
                $password = $PASSWORD;
                $dbname = $DATABASE_NAME;
                $genders = ['male', 'female'];
                $conn = new mysqli($servername, $username, $password, $dbname);
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }
                $sql = "SELECT * FROM EMPLOYEES";
                $result = mysqli_query($conn, $sql);
                $conn->close();
                if (mysqli_num_rows($result) > 0) {
                    while ($row = mysqli_fetch_assoc($result)) {
                        echo "<tr>";
                        echo "<td><input name='name-email-" . $row['id'] . "'class='email form-control' id=email-" . $row['id'] . " type='text' disabled value=" . $row["email"] . " required pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'></td>";
                        echo "<td><input  name='name-name-" . $row['id'] . "'class='name form-control'  id=name-" . $row['id'] . " type='text' disabled value='" . $row["name"] . "' required pattern='[a-zA-Z\s]+' title='special characters are not allowed'></td>";
                        echo "<td><select  name='name-state-" . $row['id'] . "'class='state form-control' id=state-" . $row['id'] . " disabled  name='state' id='input-state' required><option value=''>state</option>";
                        for ($i = 0; $i < count($states); $i++) {
                            if ($i == $row['state']) {
                                echo '<option selected value=' . $i . '>' . $states[$i] . '</option>';
                            } else {
                                echo '<option  value=' . $i . '>' . $states[$i] . '</option>';
                            }
                        }
                        echo "</select></td>";
                        echo "<td><select name='name-gender-" . $row['id'] . "'class='gender form-control'  id=gender-" . $row['id'] . " disabled  name='gender' id='input-state' required><option value=''>gender</option>";
                        for ($i = 0; $i < count($genders); $i++) {
                            if ($genders[$i] == $row['gender']) {
                                echo '<option selected value=' . $genders[$i] . '>' . $genders[$i] . '</option>';
                            } else {
                                echo '<option  value=' . $genders[$i] . '>' . $genders[$i] . '</option>';
                            }
                        }
                        echo "</select></td>";
                        echo "<td><input name='name-age-" . $row['id'] . "'class='age form-control'  id=age-" . $row['id'] . "  type='number' disabled value=" . $row["age"] . " required min='18' max='100'></td>";
                        echo "<td><div class=' form-control actions' role='group'><a href='/employees-list/controllers/delete.php?id=" . $row['id'] . "' id='delete-" . $row['id'] . "'><button type='button'class='btn btn-danger btn-delete'>Delete</button></a>";
                        echo "<button id='update-" . $row["id"] . "'type='button'class='btn btn-warning btn-update' onclick='enableTags(" . $row["id"] . ")'>Update</button>";
                        echo "<a href='update.php?id=" . $row['id'] . "' id='delete-" . $row['id'] . "'><button id='save-" . $row["id"] . "'type='submit' class='btn btn-primary' style='display:none'>Save</button></a>";
                        echo "<a href='/employees-list'><button id='cancel-" . $row["id"] . "'type='button' class='btn btn-danger' style='display:none'>Cancel</button></a></div>";
                        echo "</div>";
                        echo "</td>";
                        echo "</tr>";
                    }
                }
            }
            view()
            ?>
        </tbody>
    </table>
</form>
<script src='assets/js/script.js'></script>
<?php include 'includes\footer.php'; ?>