<?= $this->extend('layouts/index') ?>
<?= $this->section('content') ?>
<?php
$session = session();
$data = $session->getFlashdata('data');
if ($data === NULL) {
    $data = [
        'employee_name' => '',
        'employee_email' => '',
        'employee_password' => '',
        'employee_role' => '',
        'employee_phoneno' => '',
        'employee_gender' => '',
        'employee_marital_status' => '',
        'employee_dob' => '',
    ];
} 
?>
<form action="/admin/dashboard/add" method="post" class='add-form'>
    <input class='form-control' type="text" placeholder='Employee Name' name='employee_name' value=<?= $data['employee_name'] ?>>
    <?php
    if (isset($validation)) {
        echo "<p class=error-container style='color:red'>";
        echo ($validation->getError($fieldName = 'employee_name'));
        echo "</p>";
    }
    ?>
    <input class='form-control' type="email" placeholder="Employee Mail id" name="employee_email" value=<?= $data['employee_email'] ?>>
    <?php
    if (isset($validation)) {
        echo "<p class=error-container style='color:red'>";
        echo ($validation->getError($fieldName = 'employee_email'));
        echo "</p>";
    }
    ?>
    <select class='form-control' name="employee_role" id="" value=<?= $data['employee_role'] ?>>
        <option value="">Role</option>
        <?php $roles = ['Manager', 'Developer', 'Tester', 'Analyst', 'Tech-Support', 'Designer'];
        foreach ($roles as $role) {
            if ($data['employee_role'] === $role) {
                echo '<option value=' . $role . ' selected>' . $role . '</option>';
            } else {
                echo '<option value=' . $role . '>' . $role . '</option>';
            }
        }
        ?>
    </select>
    <?php
    if (isset($validation)) {
        echo "<p class=error-container style='color:red'>";
        echo ($validation->getError($fieldName = 'employee_role'));
        echo "</p>";
    }
    ?>
    <select class='form-control' name="employee_gender" id="" value=<?= $data['employee_gender'] ?>>
        <option value="">Gender</option>
        <?php $genders = ['Male', 'Female'];
        foreach ($genders as $gender) {
            if ($data['employee_gender'] === $gender) {
                echo '<option value=' . $gender . ' selected>' . $gender . '</option>';
            } else {
                echo '<option value=' . $gender . '>' . $gender . '</option>';
            }
        }
        ?>
    </select>
    <?php
    if (isset($validation)) {
        echo "<p class=error-container style='color:red'>";
        echo ($validation->getError($fieldName = 'employee_gender'));
        echo "</p>";
    }
    ?>
    <input class='form-control' type="date" placeholder='Enter the employeename' name='employee_dob' value=<?= $data['employee_dob'] ?>>
    <?php
    if (isset($validation)) {
        echo "<p class=error-container style='color:red'>";
        echo ($validation->getError($fieldName = 'employee_dob'));
        echo "</p>";
    }
    ?>
    <select class='form-control' name="employee_marital_status" id="" value=<?= $data['employee_marital_status'] ?>>
        <option value="">Marital Status</option>
        <?php $statuses = ['Single', 'Married'];
        foreach ($statuses as $status) {
            if ($data['employee_marital_status'] === $status) {
                echo '<option value=' . $status . ' selected>' . $status . '</option>';
            } else {
                echo '<option value=' . $status . '>' . $status . '</option>';
            }
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
    <input class='form-control' type="tel" name="employee_phoneno" placeholder="Enter the phone number" value=<?= $data['employee_phoneno'] ?>>
    <?php
    if (isset($validation)) {
        echo "<p class=error-container style='color:red'>";
        echo ($validation->getError($fieldName = 'employee_phoneno'));
        echo "</p>";
    }
    ?>
    <div class='form-btn-div'>
        <div>
            <button class="btn btn-primary" type="submit">Add User</button>
        </div>

    </div>
</form>
<?= $this->endSection() ?>