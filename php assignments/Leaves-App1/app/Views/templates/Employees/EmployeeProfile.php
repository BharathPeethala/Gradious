<?= $this->extend('layouts/index') ?>
<?= $this->section('content') ?>
<div>
    <h4><?= $item['employee_name'] ?></h4>
    <p><?= $item['employee_email'] ?></p>
    <p><?= $item['employee_phoneno'] ?></p>
    <p><?= $item['employee_role'] ?></p>
</div>
<div>
    <h4><?= 'No of Leaves'; ?></h4>
    <p>No of Sick leaves: <?= $item['employee_no_sick_leaves'] ?></p>
    <p>No of Personal leaves: <?= $item['employee_no_personal_leaves'] ?></p>
    <p>No of Emergency leaves: <?= $item['employee_no_emg_leaves'] ?></p>
    <?php if ($item['employee_marital_status'] === 'Married') : ?>
        <?php if ($item['employee_gender'] === "Male") : ?>
            <p>No of Paternity leaves: <?= $item['employee_no_pat_leaves'] ?></p>
        <?php else : ?>
            <p>No of Maternity leaves: <?= $item['employee_no_mat_leaves'] ?></p>
        <?php endif ?>
    <?php endif ?>
</div>
<?= $this->endSection(); ?>