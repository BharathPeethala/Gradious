<?= $this->extend('layouts/index') ?>
<?= $this->section('content') ?>
<?php
$session = session();
if (isset($validation)) {
    $user_details = [];
    $user_details = $session->getFlashdata('updated_data');
}
?>
<form action="/employee/dashboard/update" method="post" class='add-update-form'>
    <input class='form-control' type="text" name="employee_name" placeholder="Employee Name" value=<?= $user_details['employee_name'] ?>>
    <?php
    if (isset($validation)) {
        echo "<p class=error-container style='color:red'>";
        echo ($validation->getError($fieldName = 'employee_name'));
        echo "</p>";
    }
    ?>
    <input class='form-control' type="tel" name="employee_phoneno" placeholder="Employee Phone Number" value=<?= $user_details['employee_phoneno'] ?>>
    <?php
    if (isset($validation)) {
        echo "<p class=error-container style='color:red'>";
        echo ($validation->getError($fieldName = 'employee_phoneno'));
        echo "</p>";
    }
    ?>
    <select class='form-control' name="employee_marital_status">
        <option value="">Marital Status</option>
        <?php
        if ($user_details['employee_marital_status'] === 'Married') {
            echo '<option value=Married selected>Married</option>
                <option value=Single>Single</option>';
        } else {
            echo '<option value=Married>Married</option>
            <option value=Single selected>Single</option>';
        }
        ?>
    </select>
    <?php
    if (isset($validation)) {
        echo "<p class=error-container style='color:red'>";
        echo ($validation->getError($fieldName = 'employee_marital_status'));
        echo "</p>";
    }
    ?>
    <input class='form-control' type="date" id="dob" name="employee_dob" value=<?= $user_details['employee_dob'] ?>>
    <?php
    if (isset($validation)) {
        echo "<p class=error-container style='color:red'>";
        echo ($validation->getError($fieldName = 'employee_dob'));
        echo "</p>";
    }
    ?>
    <div class='form-btn-div'>
        <button class='btn btn-primary' type="submit">Update</button>
    </div>

</form>
<?= $this->endSection(); ?>