<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('css/style.css'); ?>">
    <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>
<body>
    <nav class="navbar navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <div class='logo'>
                <h3><a href='/'>Leave App</a></h3>
            </div>
            <?php $session = session(); ?>
            <?php if (!$session->logged_in) : ?>
                <div class='d-flex'>
                    <a href='/admin/login'>Admin Login</a>
                    <a href='/employee/login'>Employee Login</a>
                </div>
            <?php else : ?>
                <button class="btn btn-primary"><a href='/logout'>LOGOUT</a></button>
        </div>
    <?php endif; ?>
    </nav>
    <div class="main-container">
        <?php if ($session->logged_in) : ?>
            <div class="dashboards">
                <?php if ($session->user_type === 'admin') : ?>
                    <?= view('/templates/Admin/AdminDashboard') ?>
                <?php else : ?>
                    <?= view('/templates/Employees/EmployeesDashboard') ?>
                <?php endif; ?>
            </div>
        <?php endif ?>
        <div class='container dynamic-content'>
            <?= $this->renderSection('content') ?>
        </div>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</html>